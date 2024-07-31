document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ensForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const ensName = document.getElementById('ensName').value.trim();

        if (ensName) {
            try {
                // Initialize ENS.js
                const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
                const ens = new ENS({ provider, ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' });

                // Lookup ENS name
                const address = await ens.getAddress(ensName);
                
                resultDiv.textContent = `Address: ${address}`;
            } catch (error) {
                resultDiv.textContent = `Error: ${error.message}`;
            }
        } else {
            resultDiv.textContent = 'Please enter a valid ENS name.';
        }
    });
});
