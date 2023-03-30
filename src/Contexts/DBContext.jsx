import React, { useContext, useEffect, useState } from 'react'
import {createContext} from "react"
import {db } from "../firebaseConfig"
import {doc ,updateDoc ,addDoc,onSnapshot} from"firebase/firestore"
import userContext from './AuthContext'
const dbContext=createContext()
export const DBContextProvider = ({children}) => {
    const {user}=useContext(userContext)
    const dbCollection=doc(db,"Courses",`${user?.email}`)
    const [dataList,setDataList]=useState([])
    // Listen to the data
    useEffect(() => {
      onSnapshot(dbCollection ,snapShot=>{
        setDataList(snapShot.data()?.userList)
      })
    
    }, [user])
    //adding data using updateDoc
    const addData=  async(ele)=>{
        let newData= dataList ? [...dataList] :[]
        newData.push(ele)
        try{
            await updateDoc(dbCollection,{
                userList:newData
                
            }
            )
        }catch(err){
            alert(err.message)
        }
    }
    //remove data using updateDoc
    const deleteEle= async (indx)=>{
        try{
            let newData= dataList?.filter((ele,index)=>
            indx !=index
            )
            await updateDoc(dbCollection,{
                userList:newData
            })
            
        }catch(err){
            alert(err.message)
        }
    }
  return (
    <dbContext.Provider value={{dataList ,addData,deleteEle}}>{children}</dbContext.Provider>
  )
}

export default dbContext