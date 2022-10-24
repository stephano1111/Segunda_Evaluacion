import React, {useState} from 'react';



const Conversor = () => {
    let [resp, setResp] = useState(0);
    const [val1, setVal1] = useState(1);
    
    var div_ent = 'mxm';
    var div_sal = 'mxm';
    // const arrDiv = ['mxm', 'usd', 'eur', 'btc', 'eth', 'doge'];
    
    const onChange = (e) => {
        let val=0;
        if(e.target.name === 'val1'){
            setVal1(e.target.value);
            val = e.target.value;
        }
        if(div_ent === 'mxm'){
            if(div_sal === 'mxm'){
                setResp(val);
            }
        }     
        
        

        
    }
    
    return (
        <>
            <div>
                <label>Ingrese monto:</label>
                <input type="text" name='val1' id='val1' value={val1} onChange={onChange}/>
                <br/>
                <label>Seleccione divisa de entrada:</label>
                <button id="mxm" onClick={div_ent='mxm'}>MXM</button>
                <button id="usd" onClick={div_ent='usd'}>USD</button>
                <button id="eur" onClick={div_ent='eur'}>EUR</button>
                <button id="btc" onClick={div_ent='btc'}>BTC</button>
                <button id="eth" onClick={div_ent='eth'}>ETH</button>
                <button id="doge" onClick={div_ent='doge'}>DOGE</button>
                <br/>

            </div>

            <div>
                <label>Resultado</label>
                <label>Seleccione divisa de salida:</label>
                <button id="mxm1" onClick={div_sal='mxm'}>MXM</button>
                <button id="usd1" onClick={div_sal='usd'}>USD</button>
                <button id="eur1" onClick={div_sal='eur'}>EUR</button>
                <button id="btc1" onClick={div_sal='btc'}>BTC</button>
                <button id="eth1" onClick={div_sal='eth'}>ETH</button>
                <button id="doge1" onClick={div_sal='doge'}>DOGE</button>
                <br/>
                <input type="text" name="resp" id="resp" value={resp}/>
            </div>
        </>
    );
}

export default Conversor;