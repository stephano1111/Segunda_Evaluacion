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
        // MXM a -> divisas
        if(div_ent === 'mxm'){
            if(div_sal === 'mxm'){
                setResp(val);
            }
            if(div_sal === 'usd'){
                setResp(val/19.93);
            }
            if(div_sal === 'eur'){
                setResp(val/19.68);
            }
            if(div_sal === 'btc'){
                setResp(val/386100.39);
            }
            if(div_sal === 'eth'){
                setResp(val/26954.18);
            }
            if(div_sal === 'doge'){
                setResp(val/0.002253);
            } 
        }
        // USD a -> divisas 
        if(div_ent === 'usd'){
            if(div_sal === 'usd'){
                setResp(val);
            }
            if(div_sal === 'mxm'){
                setResp(val*19.93);
            }
            if(div_sal === 'eur'){
                setResp(val*1.01);
            }
            if(div_sal === 'btc'){
                setResp(val*0.000052);
            }
            if(div_sal === 'eth'){
                setResp(val*0.00074);
            }
            if(div_sal === 'doge'){
                setResp(val*16.8);
            } 
        }     
        // EUR a -> divisas 
        if(div_ent === 'eur'){
            if(div_sal === 'eur'){
                setResp(val);
            }
            if(div_sal === 'mxm'){
                setResp(val*19.67);
            }
            if(div_sal === 'usd'){
                setResp(val*0.99);
            }
            if(div_sal === 'btc'){
                setResp(val*0.000051);
            }
            if(div_sal === 'eth'){
                setResp(val*0.00073);
            }
            if(div_sal === 'doge'){
                setResp(val*16.59);
            } 
        }
        // BTC a -> divisas 
        if(div_ent === 'btc'){
            if(div_sal === 'btc'){
                setResp(val);
            }
            if(div_sal === 'mxm'){
                setResp(val*386100.39);
            }
            if(div_sal === 'usd'){
                setResp(val/0.000052);
            }
            if(div_sal === 'eur'){
                setResp(val/0.000051);
            }
            if(div_sal === 'eth'){
                setResp(val*14.7536);
            }
            if(div_sal === 'doge'){
                setResp(val*320975.02);
            } 
        }
        // ETH a -> divisas 
        if(div_ent === 'eth'){
            if(div_sal === 'eth'){
                setResp(val);
            }
            if(div_sal === 'mxm'){
                setResp(val*26954.18);
            }
            if(div_sal === 'usd'){
                setResp(val/0.00074);
            }
            if(div_sal === 'eur'){
                setResp(val/0.00073);
            }
            if(div_sal === 'btc'){
                setResp(val/14.7536);
            }
            if(div_sal === 'doge'){
                setResp(val*22589.1427);
            } 
        }
        // DOGE a -> divisas 
        if(div_ent === 'doge'){
            if(div_sal === 'doge'){
                setResp(val);
            } 
            if(div_sal === 'mxm'){
                setResp(val*0.002253);
            }
            if(div_sal === 'usd'){
                setResp(val/16.8);
            }
            if(div_sal === 'eur'){
                setResp(val/16.59);
            }
            if(div_sal === 'btc'){
                setResp(val/320975.02);
            }
            if(div_sal === 'eth'){
                setResp(val/22589.1427);
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
                <p>{div_ent}</p>
                <br/>

            </div>

            <div>
                
                <label>Seleccione divisa de salida:</label>
                <button id="mxm1" onClick={() => camSal('mxm')}>MXM</button>
                <button id="usd1" onClick={() => camSal('usd')}>USD</button>
                <button id="eur1" onClick={() => camSal('eur')}>EUR</button>
                <button id="btc1" onClick={() => camSal('btc')}>BTC</button>
                <button id="eth1" onClick={() => camSal('eth')}>ETH</button>
                <button id="doge1" onClick={() => camSal('doge')}>DOGE</button>
                <br/>
                <label>Resultado</label>
                <p>{div_sal}</p>
                <p>{resp}</p>
            </div>
        </>
    );
}

export default Conversor;