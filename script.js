const abi = [
    { "inputs": [{ "internalType": "string", "name": "_ghostTokenURI", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "ApprovalCallerNotOwnerNorApproved", "type": "error" }, { "inputs": [], "name": "ApprovalQueryForNonexistentToken", "type": "error" }, { "inputs": [], "name": "BalanceQueryForZeroAddress", "type": "error" }, { "inputs": [], "name": "MintERC2309QuantityExceedsLimit", "type": "error" }, { "inputs": [], "name": "MintToZeroAddress", "type": "error" }, { "inputs": [], "name": "MintZeroQuantity", "type": "error" }, { "inputs": [], "name": "OwnerQueryForNonexistentToken", "type": "error" }, { "inputs": [], "name": "OwnershipNotInitializedForExtraData", "type": "error" }, { "inputs": [], "name": "TransferCallerNotOwnerNorApproved", "type": "error" }, { "inputs": [], "name": "TransferFromIncorrectOwner", "type": "error" }, { "inputs": [], "name": "TransferToNonERC721ReceiverImplementer", "type": "error" }, { "inputs": [], "name": "TransferToZeroAddress", "type": "error" }, { "inputs": [], "name": "URIQueryForNonexistentToken", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "fromTokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "toTokenId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "ConsecutiveTransfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseTokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "contractURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "endTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "freezeMetaData", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ghostTokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isMetaDataFrozen", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxMintsPerWallet", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxWhitelistMintsPerWallet", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "num", "type": "uint256" }, { "internalType": "address", "name": "_to", "type": "address" }], "name": "mintMany", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }], "name": "mintTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "mintedPerAddress", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "operatorFilteringEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "mintCount", "type": "uint256" }], "name": "publicMint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "publicMintPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "revealTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "salePrice", "type": "uint256" }], "name": "royaltyInfo", "outputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_uri", "type": "string" }], "name": "setBaseUri", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "uri", "type": "string" }], "name": "setContractUri", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_uri", "type": "string" }], "name": "setGhostUri", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newWhitelistMintPrice", "type": "uint256" }, { "internalType": "uint256", "name": "newPublicMintPrice", "type": "uint256" }], "name": "setMintPrices", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_startTime", "type": "uint256" }, { "internalType": "uint256", "name": "_endTime", "type": "uint256" }], "name": "setMintTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "value", "type": "bool" }], "name": "setOperatorFilteringEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "setRevealTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "merkleRoot", "type": "bytes32" }], "name": "setWhitelistMerkleRoot", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_startTime", "type": "uint256" }, { "internalType": "uint256", "name": "_endTime", "type": "uint256" }], "name": "setWhitelistMintTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newMaxSupply", "type": "uint256" }], "name": "shrinkSupply", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32[]", "name": "merkleProof", "type": "bytes32[]" }, { "internalType": "uint256", "name": "mintCount", "type": "uint256" }], "name": "whitelistMint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "whitelistMintEndTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "whitelistMintPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "whitelistMintTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
    // Здесь должен быть ABI код вашего контракта
    // Пример: https://api.etherscan.io/api?module=contract&action=getabi&address=0xd5e09d94df4bc5367c579b77af5fd5d13f335731
];
const whiteList = {
    "0x037d99f5947f12216cb253134830798ae0f2e8f9": [
        "0x5130eeb8546ee5e7fca236b7eb122e5ece4c1103496bc09c3db311d5cdd0db92",
        "0x5ddf5d22b408528ab60c9ad09bb06dff8f9f51e4022a3613464bed1175440944",
        "0x0fc48d5ceb15d6acb8a0a2254b28f1ea180fcdfeddd10c75be7d1de4ded352f8"
    ],
    "0x037d99f5947f12216cb253134830798ae0f2e8ff": [
        "0x6506cccd693c6247be9f8d3505486814bf038dc4a2d651374ab12a26a020ebf2",
        "0x5ddf5d22b408528ab60c9ad09bb06dff8f9f51e4022a3613464bed1175440944",
        "0x0fc48d5ceb15d6acb8a0a2254b28f1ea180fcdfeddd10c75be7d1de4ded352f8"
    ],
    "0x037d99f5947f12216cb253134830798ae0f2e8f1": [
        "0x0b65afb586949edd3ea06cc89deaa3b46b35c0042636fe72fe436c440e660c4b",
        "0x1911ccd56516dd4b4a40e0af493ece9678af9a75229f9c500f49dd782bc81ad8",
        "0x0fc48d5ceb15d6acb8a0a2254b28f1ea180fcdfeddd10c75be7d1de4ded352f8"
    ],
    "0x037d99f5947f12216cb253134830798ae0f2e8f8": [
        "0x23569f69881419f32ce219091e842e0d30a429099d5bb87b4f42aac19c148418",
        "0x1911ccd56516dd4b4a40e0af493ece9678af9a75229f9c500f49dd782bc81ad8",
        "0x0fc48d5ceb15d6acb8a0a2254b28f1ea180fcdfeddd10c75be7d1de4ded352f8"
    ],
    "0xa6acef4ccaaff480d9dbd9989d609d988c765d78": [
        "0xe7ce7d78d7dc8cea45f2378d1729f17c9eec070a048f0c45cb56f2c50906d1c3"
    ]
};
const contractAddress = '0xDf162f6FC68647867BC20CF766274f92ADcD2813'; // Адрес вашего контракта
document.addEventListener("DOMContentLoaded", () => {
    const connectButton = document.getElementById("connectWallet");
    const mintCountElement = document.getElementById("mintedCount");
    const whitelistTextElement = document.getElementById("whitelistText");
    //  const walletAddressSpan = document.getElementById("walletAddress");
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, contractAddress);
    let isPublicMinting = false;
    let isWhitelistMinting = false;
    connectButton.addEventListener("click", async () => {
        await connectWallet();
    });
    async function connectWallet() {
        if (typeof window.ethereum !== "undefined") {
            try {
                await window.ethereum.enable();

                const accounts = await web3.eth.getAccounts();
                const userAddress = accounts[0];

                // Сокращаем адрес кошелька до 8 символов
                const shortenedAddress = userAddress.slice(0, 8);

                // Отображаем сокращенный адрес на кнопке
                connectButton.textContent = shortenedAddress;

                const currentUnixtime = (Math.floor(Date.now() / 1000));
                isPublicMinting = currentUnixtime > parseInt(await contract.methods.startTime().call()) && currentUnixtime < parseInt(await contract.methods.endTime().call());
                isWhitelistMinting = currentUnixtime > parseInt(await contract.methods.whitelistMintTime().call()) && currentUnixtime < parseInt(await contract.methods.whitelistMintEndTime().call());
                document.getElementById('mintButton').disabled = !isPublicMinting;
                // Показываем полный адрес рядом с кнопкой
                //  walletAddressSpan.textContent = userAddress;
                //  walletAddressSpan.style.display = "inline";
                refreshMintCount();
                updateCountdowns();
                if (whiteList[userAddress.toLowerCase()] !== undefined) {
                    whitelistTextElement.textContent = "You are whitelisted";
                    if (isWhitelistMinting) {
                        document.getElementById('whitelistMint').style.display = 'inline-block';
                    } else {
                        document.getElementById('whitelistMint').style.display = 'none';
                    }
                } else {
                    whitelistTextElement.innerHTML = "You are <b>NOT</b> whitelisted";
                    document.getElementById('whitelistMint').style.display = 'none';
                }
            } catch (error) {
                console.error("Error connecting wallet:", error);
            }
        } else {
            alert("MetaMask not detected. Please install it.");
        }
    }
    function createTimer(timeLeftSec, elementID, finishedText, finishedCallback) {
        var seconds = timeLeftSec;
        var countdownTimer = null;
        function timer() {
            var days = Math.floor(seconds / 24 / 60 / 60);
            var hoursLeft = Math.floor((seconds) - (days * 86400));
            var hours = Math.floor(hoursLeft / 3600);
            var minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
            var minutes = Math.floor(minutesLeft / 60);
            var remainingSeconds = seconds % 60;

            function pad(n) {
                return (n < 10 ? "0" + n : n);
            }
            document.getElementById(elementID).innerHTML = pad(days) + ":" + pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
            if (seconds < 1) {
                clearInterval(countdownTimer);
                document.getElementById(elementID).innerHTML = finishedText;
                if (finishedCallback !== undefined) {
                    finishedCallback.call(this);
                }
            } else {
                seconds--;
            }
        }
        countdownTimer = setInterval(timer, 1000);
    }
    async function updateCountdowns() {
        const currentUnixtime = (Math.floor(Date.now() / 1000));
        const publicMintCountdown = parseInt(await contract.methods.startTime().call()) - currentUnixtime;
        const whitelistMintCountdown = parseInt(await contract.methods.whitelistMintTime().call()) - currentUnixtime;
        createTimer(publicMintCountdown, "publicMintCountdown", "Done", function () {
            console.log("DONE");
        });
        createTimer(whitelistMintCountdown, "whitelistMintCountdown", "Done", function () {
            console.log("DONE");
        });
    }
    async function refreshMintCount() {
        const minted = parseInt(await contract.methods.totalSupply().call()) + "/" + parseInt(await contract.methods.maxSupply().call());
        mintCountElement.textContent = minted + " minted";
    }
    // Функция для подключения кнопки "Mint" с выбранным количеством NFT
    async function mintNFT(quantity) {
        // Подключение кошелька MetaMask
        if (typeof window.ethereum !== 'undefined') {
            try {
                await window.ethereum.enable();
                const accounts = await web3.eth.getAccounts();
                const userAddress = accounts[0];

                if (quantity >= 1 && quantity <= 10) {
                    const alreadyMintedAmount = parseInt(await contract.methods.mintedPerAddress(userAddress).call());
                    const payQuantity = alreadyMintedAmount > 0 ? quantity : quantity - 1;
                    const publicMintPrice = parseInt(await contract.methods.publicMintPrice().call());
                    const fee = web3.utils.toBN(publicMintPrice * payQuantity);
                    const tx = await contract.methods.publicMint(quantity).send({
                        "from": userAddress,
                        "value": fee
                    });
                    console.log('Transaction receipt:', tx);
                    refreshMintCount();
                } else {
                    console.log("Invalid quantity. Please select a value between 1 and 10.");
                }
            } catch (error) {
                console.error("Error connecting MetaMask:", error);
            }
        } else {
            console.log("MetaMask not detected. Please install it.");
        }
    }

    // Функция для подключения кнопки "Mint" с выбранным количеством NFT
    async function whitelistMintNFT(quantity) {
        // Подключение кошелька MetaMask
        if (typeof window.ethereum !== 'undefined') {
            try {
                await window.ethereum.enable();
                const accounts = await web3.eth.getAccounts();
                const userAddress = accounts[0];

                if (quantity >= 1 && quantity <= 10) {
                    const alreadyMintedAmount = parseInt(await contract.methods.mintedPerAddress(userAddress).call());
                    const payQuantity = alreadyMintedAmount > 0 ? quantity : quantity - 1;
                    const whitelistMintPrice = parseInt(await contract.methods.whitelistMintPrice().call());
                    const fee = web3.utils.toBN(whitelistMintPrice * payQuantity);
                    const tx = await contract.methods.whitelistMint(whiteList[userAddress.toLowerCase()], quantity).send({
                        "from": userAddress,
                        "value": fee
                    });
                    console.log('Transaction receipt:', tx);
                    refreshMintCount();
                } else {
                    console.log("Invalid quantity. Please select a value between 1 and 10.");
                }
            } catch (error) {
                console.error("Error connecting MetaMask:", error);
            }
        } else {
            console.log("MetaMask not detected. Please install it.");
        }
    }

    // Обработчик для кнопки "Mint"
    document.getElementById("mintButton").addEventListener("click", async () => {
        await connectWallet();
        const quantity = parseInt(document.getElementById("quantity").value);
        if (isPublicMinting) {
            if (quantity >= 1 && quantity <= 10) {
                await mintNFT(quantity);
            } else {
                console.log("Invalid quantity. Please select a value between 1 and 10.");
            }
        } else if (isWhitelistMinting) {
            if (quantity >= 1 && quantity <= 5) {
                await whitelistMintNFT(quantity);
            } else {
                console.log("Invalid quantity. Please select a value between 1 and 5.");
            }
        }
    });
});
