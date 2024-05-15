export const menu: {
  title: string;
  description: string;
  code: string;
  language: "solidity" | "javascript";
}[] = [
  {
    title: "Msgport Interface",
    description:
      "This interface provides developers with a generic message passing interface to send arbitrary data between contracts on different blockchain networks.",
    code: `
pragma solidity ^0.8.0;

interface IMessagePort {
    event MessageSent(
        bytes32 indexed msgId, address fromDapp, uint256 toChainId, address toDapp, bytes message, bytes params
    );
    event MessageRecv(bytes32 indexed msgId, bool result, bytes returnData);

    /// @dev Send a cross-chain message over the MessagePort.
    /// @notice Send a cross-chain message over the MessagePort.
    /// @param toChainId The message destination chain id. <https://eips.ethereum.org/EIPS/eip-155>
    /// @param toDapp The user application contract address which receive the message.
    /// @param message The calldata which encoded by ABI Encoding.
    /// @param params Extend parameters to adapt to different message protocols.
    /// @return msgId Return the ID of message.
    function send(uint256 toChainId, address toDapp, bytes calldata message, bytes calldata params)
        external
        payable
        returns (bytes32 msgId);

    /// @notice Get a quote in source native gas, for the amount that send() requires to pay for message delivery.
    ///         It should be noted that not all ports will implement this interface.
    /// @dev If the messaging protocol does not support on-chain fetch fee, then revert with "Unimplemented!".
    /// @param toChainId The message destination chain id. <https://eips.ethereum.org/EIPS/eip-155>
    /// @param fromDapp The user application contract address which send the message.
    /// @param toDapp The user application contract address which receive the message.
    /// @param message The calldata which encoded by ABI Encoding.
    /// @param params Extend parameters to adapt to different message protocols.
    function fee(uint256 toChainId, address fromDapp, address toDapp, bytes calldata message, bytes calldata params)
        external
        view
        returns (uint256);
}`,
    language: "solidity",
  },
  {
    title: "Deploy ExampleReceiverDapp",
    description:
      "Deploy a receiver contract on the target chain to receive messages. (for example purposes only)",
    code: `
pragma solidity ^0.8.17;

import "https://github.com/msgport/msgport/blob/main/src/user/Application.sol";

contract ExampleReceiverDapp is Application {
    event DappMessageRecv(uint256 fromChainId, address fromDapp, address localPort, bytes message);

    // local port address
    address public immutable PORT;
    // remote dapp address
    address public immutable DAPP;

    constructor(address port, address dapp) {
        PORT = port;
        DAPP = dapp;
    }

    /// @notice You could check the fromDapp address or messagePort address.
    function testReceive(bytes calldata message) external {
        uint256 fromChainId = _fromChainId();
        address fromDapp = _xmsgSender();
        address localPort = _msgPort();
        require(localPort == PORT);
        require(fromDapp == DAPP);
        emit DappMessageRecv(fromChainId, fromDapp, localPort, message);
    }
}`,
    language: "solidity",
  },
  {
    title: "Encode Calldata",
    description: "Build the remote call data as the message payload.",
    code: `
import { ethers } from 'ethers';

const privateKey = process.env.PRIVATE_KEY;
const providerUrl = <Your RPC provider URL>;
const receiverDappAddr = <Your ExampleReceiverDapp Address>;

function encodeReceiveCall() {
    const receiverABI = [{
        "inputs": [
            {
                "internalType": "bytes",
                "name": "message",
                "type": "bytes"
            }
        ],
        "name": "testReceive",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }];
    const testMessage = "0x1234";
    const provider = new ethers.JsonRpcProvider(providerUrl);
    const signer = new ethers.Wallet(privateKey, provider);
    const receiverDapp = new ethers.Contract(receiverDappAddr, receiverABI, signer);
    const callData = receiverDapp.interface.encodeFunctionData('testReceive', [testMessage]);
    console.log(callData);
}

encodeReceiveCall();`,
    language: "javascript",
  },
  {
    title: "Get Fee And Params From Msgport API",
    description: "Estimate fee and get adaptation params from Msgport API.",
    code: `
import axios from 'axios';

async function getFeeParams() {
    const requestBody = {
        'from_chain_id': <SourceChainID>,
        'to_chain_id': <TargetChainID>,
        'payload': <EncodeCallData>,
        'from_address': <SenderAddress>,
        'to_address': <ReceiverAddress>,
        'refund_address': <RefundAddress>,
    };
    const result = await axios.get("https://api.msgport.xyz/ormp/fee", { params: requestBody });
    const { fee, params } = result.data.data;
    console.log(fee, params);
}

await getFeeParams();`,
    language: "javascript",
  },
  {
    title: "Sending Message",
    description:
      "Sending massage via Msgport to dapp on target chain using encoded message data and params provided in previous steps.",
    code: `
pragma solidity ^0.8.17;

import "https://github.com/msgport/msgport/blob/main/src/interfaces/IMessagePort.sol";

contract ExampleSenderDapp {
    event DappMessageSent(address localPort, bytes message);

    // local port address
    address public immutable PORT;

    constructor(address port) {
        PORT = port;
    }

    function testSend(uint256 toChainId, address toDapp, bytes calldata message, bytes calldata params) external payable{
        IMessagePort(PORT).send{value: msg.value}(toChainId, toDapp, message, params);
        emit DappMessageSent(PORT, message);
    }
}`,
    language: "solidity",
  },
  {
    title: "XAccount",
    description: "",
    code: `
pragma solidity ^0.8.0;

contract ExampleXAccount {
    // XAccountFactory address
    address public factory;
    // PortRegistry address
    address public registry;

    constructor(address factory_, address registry_) {
        factory = factory_;
        registry = registry_;
    }

    /// @dev The function is utilized to create a xAccount on the target chain.
    function createXAccountOnTargetChain(bytes4 code, uint256 toChainId, bytes calldata params, address recovery)
        public
        payable
    {
        IXAccountFactory(factory).xCreate{value: msg.value}(code, toChainId, params, recovery);
    }

    /// @dev The function facilitates the execution of an xCall across a xAccount.
    function crossChainCall(
        bytes4 code,
        uint256 toChainId,
        bytes calldata params,
        address target,
        uint256 value,
        bytes calldata data,
        uint8 operation
    ) public payable {
        bytes memory message =
            abi.encodeWithSelector(ISafeMsgportModule.xExecute.selector, target, value, data, operation);
        address port = IPortRegistry(registry).get(toChainId, code);
        (, address module) = IXAccountFactory(factory).xAccountOf(block.chainid, toChainId, address(this));
        IMessagePort(port).send{value: msg.value}(toChainId, module, message, params);
    }
}`,
    language: "solidity",
  },
  {
    title: "Order Clearing",
    description: "",
    code: `
pragma solidity ^0.8.17;

// # ...（omitted code）...

contract LnBridgeTargetV3 {
    // # ...（omitted code）...

    function requestWithdrawLiquidity(
        uint256 _remoteChainId,
        bytes32[] calldata _transferIds,
        address _provider,
        bytes memory _extParams
    ) external payable {
        for (uint i = 0; i < _transferIds.length; i++) {
            bytes32 transferId = _transferIds[i];
            FillTransfer memory fillTransfer = fillTransfers[transferId];
            // make sure that each transfer has the same provider
            require(fillTransfer.provider == _provider, "provider invalid");
        }
        bytes memory message = encodeWithdrawLiquidityRequest(_transferIds, _provider);
        _sendMessageToSource(_remoteChainId, message, msg.value, _extParams);
        emit LiquidityWithdrawRequested(_transferIds, _remoteChainId);
    }

    function _sendMessageToSource(uint256 _remoteChainId, bytes memory _payload, uint256 feePrepaid, bytes memory _extParams) whenNotPaused internal override {
        address sendService = messagers[_remoteChainId].sendService;
        require(sendService != address(0), "invalid messager");
        ILowLevelMessageSender(sendService).sendMessage{value: feePrepaid}(_remoteChainId, _payload, _extParams);
    }
}

pragma solidity ^0.8.17;

// # ...（omitted code）...

contract MsgportMessager is Application, AccessController {
    IMessagePort public msgport;

    // # ...（omitted code）...

    function sendMessage(uint256 _remoteChainId, bytes memory _message, bytes memory _params) onlyWhiteList external payable {
        RemoteMessager memory remoteMessager = remoteMessagers[_remoteChainId];
        require(remoteMessager.messager != address(0), "remote not configured");
        bytes32 key = keccak256(abi.encodePacked(remoteMessager.msgportRemoteChainId, msg.sender));
        address remoteAppAddress = remoteAppReceivers[key];
        require(remoteAppAddress != address(0), "app pair not registered");
        bytes memory msgportPayload = messagePayload(msg.sender, remoteAppAddress, _message);
        msgport.send{ value: msg.value }(
            remoteMessager.msgportRemoteChainId,
            remoteMessager.messager,
            msgportPayload,
            _params
        );
    }
}`,
    language: "solidity",
  },
];
