import React, { useState} from 'react';

const DynamicBotManager = () => {
    const [bots, setBots] = useState([
        {id: '1', name: 'Email Bot', status: 'Active' },
        {id: '2', name: 'Data Bot', status: 'Inactive' }
    ]);

    const [newBot, setNewBot] = useState({ id: '', name: '', status: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBot((prevBot) => ({
            ...prevBot,
            [name]: value
        }));
    };

    const addBotToList = () => {
        if (!newBot.id || !newBot.name || !newBot.status) {
            alert('Please fill in all fields before adding a new bot.');
            return;
        }
    setBots((prevBots) => [...prevBots, newBot]);

    setNewBot({ id: '', name: '', status: ''});
    };

    const deleteBot = (id) => {
        setBots((prevBots) => prevBots.filter((bot) => bot.id !== id));
    };

    return (
        <div className='dynamic-bot-manager'>
            <h1>DynamicBotManager</h1>

            <div>
                <input
                type='text'
                name='id'
                placeholder='BOT ID'
                value={newBot.id}
                onChange={handleInputChange}
                />
                <input
                type='text'
                name='name'
                placeholder='Bot Name'
                value={newBot.name}
                onChange={handleInputChange}
                />
                <input
                type='text'
                name='status'
                placeholder='Status'
                value={newBot.status}
                onChange={handleInputChange}
                />
                <button onClick={addBotToList}>Add Bot</button>
                </div>

                <ul>
                    {bots.map((bot) => (
                        <li key={bot.id}>
                            <strong>{bot.name}</strong> (ID: {bot.id}, Status: {bot.status})
                            <button onClick={() => deleteBot(bot.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
    );
};

export default DynamicBotManager;