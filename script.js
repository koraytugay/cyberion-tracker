document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();
});

const EXTENSION_MAP = {
    1: "Babybots",
    2: "Gigantobots",
    3: "Microbots",
    4: "Multibots",
    5: "Devious Cog"
};

const ALL_EXTENSIONS = Object.values(EXTENSION_MAP);

function generateAllCombinations(extensions) {
    const results = [[]];
    for (const ext of extensions) {
        const copy = [...results];
        for (const combination of copy) {
            results.push([...combination, ext]);
        }
    }
    return results;
}

function getComboKey(exts) {
    return [...exts].sort().join('|');
}

function renderDashboard() {
    // Map numeric IDs to string names for processing
    const processedGames = gameData.map(game => ({
        ...game,
        extensions: game.extensions.map(id => EXTENSION_MAP[id])
    }));

    const totalGames = processedGames.length;
    const wins = processedGames.filter(g => g.won).length;
    const losses = totalGames - wins;
    const winRate = totalGames > 0 ? Math.round((wins / totalGames) * 100) : 0;

    // Update Stats
    document.getElementById('total-games').textContent = totalGames;
    document.getElementById('total-wins').textContent = wins;
    document.getElementById('total-losses').textContent = losses;
    document.getElementById('win-rate').textContent = `${winRate}%`;

    // Calculate Combinations
    const allCombos = generateAllCombinations(ALL_EXTENSIONS);
    
    // Sort combinations by number of extensions, then alphabetically
    allCombos.sort((a, b) => {
        if (a.length !== b.length) return a.length - b.length;
        return a.join().localeCompare(b.join());
    });

    const comboHistory = new Map(); // key -> { won: boolean, played: boolean }
    processedGames.forEach(game => {
        const key = getComboKey(game.extensions);
        if (!comboHistory.has(key)) {
            comboHistory.set(key, { won: false, played: true });
        }
        if (game.won) {
            comboHistory.get(key).won = true;
        }
    });

    // Update Combination Progress Stat
    const wonCombosCount = Array.from(comboHistory.values()).filter(h => h.won).length;
    document.getElementById('combo-progress').textContent = `${wonCombosCount}/${allCombos.length}`;

    // Render Combinations Matrix
    const combosBody = document.getElementById('combinations-body');
    combosBody.innerHTML = '';

    allCombos.forEach((combo, index) => {
        const key = getComboKey(combo);
        const history = comboHistory.get(key);
        const isPlayed = !!history;
        const isWon = history?.won || false;
        
        const tr = document.createElement('tr');
        tr.className = isPlayed ? 'row-beaten' : 'row-unbeaten';

        // Index Cell
        const idxTd = document.createElement('td');
        idxTd.className = 'idx-cell';
        idxTd.textContent = index + 1;
        tr.appendChild(idxTd);

        // Extension Cells
        ALL_EXTENSIONS.forEach(extName => {
            const td = document.createElement('td');
            td.className = 'heatmap-cell';
            const box = document.createElement('div');
            box.className = 'heat-box';
            if (combo.includes(extName)) {
                box.textContent = 'X';
                box.classList.add('active-marker');
            }
            td.appendChild(box);
            tr.appendChild(td);
        });

        // Status Cell
        const statusTd = document.createElement('td');
        statusTd.className = 'heatmap-cell';
        const statusBox = document.createElement('div');
        statusBox.className = 'heat-box';
        
        if (isWon) {
            statusBox.textContent = '✅';
            statusBox.classList.add('status-text');
        } else if (isPlayed) {
            statusBox.textContent = '❌';
            statusBox.classList.add('status-text');
        } else {
            statusBox.textContent = '-';
        }
        
        statusTd.appendChild(statusBox);
        tr.appendChild(statusTd);

        combosBody.appendChild(tr);
    });

    // Render Gameplay History
    const matrixBody = document.getElementById('matrix-body');
    matrixBody.innerHTML = '';

    const sortedGames = [...processedGames].sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedGames.forEach(game => {
        const tr = document.createElement('tr');

        // Date Cell
        const dateTd = document.createElement('td');
        dateTd.className = 'date-cell';
        dateTd.textContent = game.date;
        tr.appendChild(dateTd);

        // Extension Cells
        ALL_EXTENSIONS.forEach(extName => {
            const td = document.createElement('td');
            td.className = 'heatmap-cell';
            const box = document.createElement('div');
            box.className = 'heat-box';
            if (game.extensions.includes(extName)) {
                box.textContent = 'X';
                box.classList.add('active-marker');
            }
            td.appendChild(box);
            tr.appendChild(td);
        });

        // Result Cell
        const resTd = document.createElement('td');
        resTd.className = 'heatmap-cell';
        const resBox = document.createElement('div');
        resBox.className = 'heat-box';
        const resSpan = document.createElement('span');
        resSpan.className = game.won ? 'text-win' : 'text-loss';
        resSpan.textContent = game.won ? 'W' : 'L';
        resBox.appendChild(resSpan);
        resTd.appendChild(resBox);
        tr.appendChild(resTd);

        matrixBody.appendChild(tr);
    });
}
