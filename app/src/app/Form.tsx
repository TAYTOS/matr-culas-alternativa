import React, { FC, useRef, useState } from 'react'
import { Subject } from '#components/RollBackSettings.js'
import RollBackSettings from '#components/RollBackSettings.js'
function useUNSA_Student({cui, nues, code, period, maxCred, data}: Props){
  const [subjects, setSubjects] = useState<Subject[]>(data)

  function sendRollback(){
    
    let credsum = 0

    for(let e of data){
      credsum += e.credits
    }

    const url = "http://extranet.unsa.edu.pe/sisacad/matint_24a_v1a/academico.php"
    const fetchFunction = ` 
    const res = fetch("${url}",{
      method: "post",
      headers: {
        "Content-Type" : "application/x-www-form-urlencoded",
      },
      body: "reingreso=0&cui=${cui}&nues=${nues}&espe=0&cod0=${code}&nmat=1&periodo=2024A&creditos=${credsum}&precred=0&seleccion=${data.map((e) => 
        `,${e.id}`
      ).join()}&preseleccion=&hid_anho=&tasigs=${data.map((e) =>
        `${e.id}/${e.credits}.0`
      ).join(",")}"
    })

    res.then((data) => data.text()).then((data) => {
      console.log("hello from console")
      console.log(data)
    }) 
    `
    console.log(fetchFunction)
  }

  function addToRollback(sub: Subject){
    setSubjects([...subjects, sub])
  }

  function deleteFromRollback({id}: Subject){
    setSubjects(subjects.filter(function(item){
      return item.id !== id
    }))
  }

  function swapInRollback(sub:Subject){
    if(subjects.includes(sub)){
      deleteFromRollback(sub)
    } else {
      addToRollback(sub)
    }
  }

  function checkSubjects(){
    console.log(subjects)
  }

  return {
    sendRollback,
    addToRollback,
    deleteFromRollback,
    swapInRollback,
    checkSubjects,
    subjects,
  }
}

interface Props {
  label: string,
  cui?: string,
  nues?: string,
  code?: string,
  period?: string,
  maxCred?: string,
  data: Subject[]
}

const cuiDefault = "20220579"
const nuesDefault = "446"
const codeDefault = "IS221029"
const periodDefault = "2024A"
const maxCredDefault = "29"

const Form : FC<Props> = function({label, cui, nues, code, period, maxCred, data}){
  const { 
    swapInRollback, checkSubjects, sendRollback,
    subjects 
  } = useUNSA_Student({
    label,
    cui: cui || cuiDefault,
    nues: nues || nuesDefault,
    code: code || codeDefault,
    period: period || periodDefault,
    maxCred: maxCred || maxCredDefault,
    data
  })

  return (
    <form action="." method="POST" className="rounded-xl p-4 border-white border">
      <h2 className="font-bold text-xl"> {label} </h2>
      <input type="hidden" name="cui" value="20220579" />
      <input type="hidden" name="nues" value="446" />
      <input type="hidden" name="cod0" value="IS221029" />
      <input type="hidden" name="periodo" value="2024A" />
      <input type="hidden" name="creditos" value="22" />
      <input type="hidden" name="credsele" value="22" />
      <input type="hidden" name="seleccion" value=",1702122,1703133,1703134,1703136,1703137,1703138" />
      <input type="hidden" name="maxcred" value="29" />
      <input type="hidden" name="listgrup" value="AAAAAA" />
      <input type="hidden" name="listmat" value="010101010101" />
      <input type="hidden" name="hid_anho" value="2" />
      <RollBackSettings  data={data} />
      <button type="button" onClick={checkSubjects}> Revisar Cursos </button>
      <button type="button" onClick={sendRollback}> Rolback </button>

    </form>
  )
}

export default Form
// http://extranet.unsa.edu.pe/sisacad/matint_24a_v1a/academico.php
