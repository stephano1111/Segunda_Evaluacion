import React, {useState, useEffect} from 'react';

const Conversor = () => {
    let [resp, setResp] = useState(0);
    let [val1, setVal1] = useState(0);
    
    let [val, camEn] = useState('mxm');
    let [div_sal, camSal] = useState('mxm');
    const arrDiv = ['mxm', 'usd', 'eur', 'btc', 'eth', 'doge'];
    
    const onChange = (e) => {
        setVal1(e.target.value);
    }
    const onChange1 = (e) => {
        camEn(e.target.value);
        console.log(e.target.value);
    }
    const onChange2 = (e) => {
        camSal(e.target.value);
    }

    useEffect(() => {
        if(val === 'mxm'){
            if(div_sal === 'mxm'){
                setResp(val1);
            }
            if(div_sal === 'usd'){
                setResp(val1/19.93);
            }
            if(div_sal === 'eur'){
                setResp(val1/19.68);
            }
            if(div_sal === 'btc'){
                setResp(val1/386100.39);
            }
            if(div_sal === 'eth'){
                setResp(val1/26954.18);
            }
            if(div_sal === 'doge'){
                setResp(val1/0.002253);
            } 
        }
        // USD a -> divisas 
        if(val === 'usd'){
            if(div_sal === 'usd'){
                setResp(val1);
            }
            if(div_sal === 'mxm'){
                setResp(val1*19.93);
            }
            if(div_sal === 'eur'){
                setResp(val1*1.01);
            }
            if(div_sal === 'btc'){
                setResp(val1*0.000052);
            }
            if(div_sal === 'eth'){
                setResp(val1*0.00074);
            }
            if(div_sal === 'doge'){
                setResp(val1*16.8);
            } 
        }     
        // EUR a -> divisas 
        if(val === 'eur'){
            if(div_sal === 'eur'){
                setResp(val1);
            }
            if(div_sal === 'mxm'){
                setResp(val1*19.67);
            }
            if(div_sal === 'usd'){
                setResp(val1*0.99);
            }
            if(div_sal === 'btc'){
                setResp(val1*0.000051);
            }
            if(div_sal === 'eth'){
                setResp(val1*0.00073);
            }
            if(div_sal === 'doge'){
                setResp(val1*16.59);
            } 
        }
        // BTC a -> divisas 
        if(val === 'btc'){
            if(div_sal === 'btc'){
                setResp(val1);
            }
            if(div_sal === 'mxm'){
                setResp(val1*386100.39);
            }
            if(div_sal === 'usd'){
                setResp(val1/0.000052);
            }
            if(div_sal === 'eur'){
                setResp(val1/0.000051);
            }
            if(div_sal === 'eth'){
                setResp(val1*14.7536);
            }
            if(div_sal === 'doge'){
                setResp(val1*320975.02);
            } 
        }
        // ETH a -> divisas 
        if(val === 'eth'){
            if(div_sal === 'eth'){
                setResp(val1);
            }
            if(div_sal === 'mxm'){
                setResp(val1*26954.18);
            }
            if(div_sal === 'usd'){
                setResp(val1/0.00074);
            }
            if(div_sal === 'eur'){
                setResp(val1/0.00073);
            }
            if(div_sal === 'btc'){
                setResp(val1/14.7536);
            }
            if(div_sal === 'doge'){
                setResp(val1*22589.1427);
            } 
        }
        // DOGE a -> divisas 
        if(val === 'doge'){
            if(div_sal === 'doge'){
                setResp(val1);
            } 
            if(div_sal === 'mxm'){
                setResp(val1*0.002253);
            }
            if(div_sal === 'usd'){
                setResp(val1/16.8);
            }
            if(div_sal === 'eur'){
                setResp(val1/16.59);
            }
            if(div_sal === 'btc'){
                setResp(val1/320975.02);
            }
            if(div_sal === 'eth'){
                setResp(val1/22589.1427);
            }
        }
    });
    
    return (
        <>
            <div className='calc'>

                <div>
                    <label>Ingrese monto:</label>
                    <input type="text" name='val1' id='val1' value={val1} onChange={onChange}/>
                    <br/>
                    <label>Seleccione divisa de entrada:</label>
                    <select onChange={onChange1} name="div_inp" id="div_inp">
                        {arrDiv.map((elm, i) => {
                            return (
                                <option key={i} value={elm}>{elm}</option>
                            );
                        })}
                    </select>
                    <br/>
                </div>

                <div>
                    <label>Seleccione divisa de salida:</label>
                    <select onChange={onChange2} name="div_out" id="div_out">
                        {arrDiv.map((elm, i) => {
                            return (
                                <option key={i} value={elm}>{elm}</option>
                            )
                        })}
                    </select>
                    <br/>
                    <label>Resultado</label>
                    <p>{resp}</p>
                </div>

            </div>
        </>
    );
}

export default Conversor;