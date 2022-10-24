import React, {useState} from 'react';



const Conversor = () => {
    let [resp, setResp] = useState(0);
    const [val1, setVal1] = useState(1);
    
    let [div_ent, camEn] = useState('mxm');
    let [div_sal, camSal] = useState('mxm');
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
                <button id="mxm" onClick={() => camEn('mxm')}>MXM</button>
                <button id="usd" onClick={() => camEn('usd')}>USD</button>
                <button id="eur" onClick={() => camEn('eur')}>EUR</button>
                <button id="btc" onClick={() => camEn('btc')}>BTC</button>
                <button id="eth" onClick={() => camEn('eth')}>ETH</button>
                <button id="doge" onClick={() => camEn('doge')}>DOGE</button>
                <br/>

            </div>

            <div>
                <label>Resultado</label>
                <label>Seleccione divisa de salida:</label>
                <button id="mxm1" onClick={() => camSal('mxm')}>MXM</button>
                <button id="usd1" onClick={() => camSal('usd')}>USD</button>
                <button id="eur1" onClick={() => camSal('eur')}>EUR</button>
                <button id="btc1" onClick={() => camSal('btc')}>BTC</button>
                <button id="eth1" onClick={() => camSal('eth')}>ETH</button>
                <button id="doge1" onClick={() => camSal('doge')}>DOGE</button>
                <br/>
                <p>{resp}</p>
            </div>
        </>
    );
}

export default Conversor;