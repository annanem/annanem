document.addEventListener("DOMContentLoaded", () => {
    const connectButton = document.getElementById("connectWallet");
    const walletAddressSpan = document.getElementById("walletAddress");

    connectButton.addEventListener("click", async () => {
        if (typeof window.ethereum !== "undefined") {
            try {
                await window.ethereum.enable();

                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
                const userAddress = accounts[0];

                // Сокращаем адрес кошелька до 8 символов
                const shortenedAddress = userAddress.slice(0, 8);

                // Отображаем сокращенный адрес на кнопке
                connectButton.textContent = shortenedAddress;

                // Показываем полный адрес рядом с кнопкой
                walletAddressSpan.textContent = userAddress;
                walletAddressSpan.style.display = "inline";

            } catch (error) {
                console.error("Error connecting wallet:", error);
            }
        } else {
            alert("MetaMask not detected. Please install it.");
        }
 });

    // Функция для подключения кнопки "Mint" с выбранным количеством NFT
    async function mintNFT(quantity, userAddress) {
        const infuraProjectID = '93e60c682d9940fc99dd1e17beb1cfa0'; // Замените на свой Infura Project ID
        const contractAddress = '0xd5e09d94df4bc5367c579b77af5fd5d13f335731'; // Адрес вашего контракта

        // Создаем объект контракта ERC-20
        const web3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${infuraProjectID}`));
        const abi = [
            // Здесь должен быть ABI код вашего контракта
            // Пример: https://api.etherscan.io/api?module=contract&action=getabi&address=0xd5e09d94df4bc5367c579b77af5fd5d13f335731
        ];
        const contract = new web3.eth.Contract(abi, contractAddress);

        // Подключение кошелька MetaMask
        if (typeof window.ethereum !== 'undefined') {
            try {
                await window.ethereum.enable();
                const accounts = await web3.eth.getAccounts();
                const userAddress = accounts[0];

                if (quantity >= 1 && quantity <= 10) {
                    const nonce = await web3.eth.getTransactionCount(userAddress);

                    const data = contract.methods.mintNFT(quantity, userAddress).encodeABI();

                    const tx = {
                        nonce: nonce,
                        to: contractAddress,
                        gas: 5000000, // Укажите подходящий лимит газа
                        gasPrice: web3.utils.toWei('100', 'gwei'), // Укажите подходящую цену газа
                        data: data
                    };

                    const signedTx = await web3.eth.accounts.signTransaction(tx, accounts[0]);
                    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

                    console.log('Transaction receipt:', receipt);
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
        const quantity = parseInt(document.getElementById("quantity").value);
        if (quantity >= 1 && quantity <= 10) {
            await mintNFT(quantity);
        } else {
            console.log("Invalid quantity. Please select a value between 1 and 10.");
        }
    });
});
