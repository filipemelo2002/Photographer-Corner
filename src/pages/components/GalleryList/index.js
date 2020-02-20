import React, {useState, useEffect} from 'react'

import {FaTrashAlt} from 'react-icons/fa'
import {AiFillFolderAdd}from 'react-icons/ai'
import {MdFullscreen} from 'react-icons/md'
import './styles.css'
import watermark from './watermark.png'

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; 
export default function GalleryList({images}){
    const [imageToFullscreen, setImage] = useState('')
    const [offsetScreen,setOffset] = useState('none')
    const [data, setData] = useState([])
 
    useEffect(()=>{
        setData(images)
    },[images])
    function fullScreenHandler(img){
        setImage(img)
        setOffset('flex')
        
    }
    function deleteImage(img, id){
       
        confirmAlert({
            customUI: ({onClose})=> (
                <div className="alertDialog">
                    <h3>Você deseja excluir este arquivo?</h3>
                    <p>Cuidado, esta ação não poderá ser desfeita...</p>
                    <div>
                        <button
                            onClick={
                                ()=>{
                                    const newData = Object.assign([], data)
                                    newData.splice(id, 1)
                                    setData(newData)
                                    onClose()
                                }
                            }
                            style={{
                                padding:'7px',
                                paddingRight:'25px',
                                paddingLeft:'25px',
                                borderColor: '#cf0e0e',
                                color:'#cf0e0e',
                                backgroundColor:'#fff',
                                borderRadius:'7px',
                            }}
                        >Sim</button>
                        <button onClick={()=> { onClose() }}
                            style={{
                                padding:'7px',
                                borderColor: '#404040',
                                marginLeft:'5px',
                                paddingRight:'25px',
                                paddingLeft:'25px',
                                borderRadius:'7px',
                                backgroundColor:'#fff',
                            }}
                        >Não</button>
                    </div>
                </div>
            )
        })
    }
    return (
        <>
            <div className="gallery">
                {
                    data.map((img, id)=>( 
                        <div key={id+"-"+img}>
                            <div className="imgFrame"  style={{backgroundImage:`url(${img})`}}>
                                <img src={watermark} alt="images" style={{width:'350px'}} />
                                <div className="adminRemove">
                                    <MdFullscreen className="actionIcon fullscreen" value={id} onClick={()=>fullScreenHandler(img)}/>
                                    <FaTrashAlt className="actionIcon deleteIcon" onClick={()=>deleteImage(img, id)}/>
                                </div>
                            </div>
                        </div>  
                        )
                    )
                }
                    <div className="addFrame">
                        <AiFillFolderAdd className="actionIcon addIcon"/>
                    </div>
            </div>
            <div className="fullScreenFrame" style={{height:window.outerHeight, display:offsetScreen}} onClick={()=>{setOffset('none')} }>
                <div>
                    <img src={imageToFullscreen} alt="fullscreen"/>
                    <span>X</span>
                </div>
            </div>
        </>
    )

}