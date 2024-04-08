import React, { FC, useRef, useState } from 'react'
import { Subject } from 'components/RollBackSettings'
import RollBackSettings from 'components/RollBackSettings'

function useUNSA_Student({cui, nues, code, period, maxCred}){
  const cuiRef = useRef(null)
  const nuesRef = useRef(null)
  const codeRef = useRef(null)
  const periodRef = useRef(null)
  const maxCredRef = useRef(null)
  const [subjects, setSubjects] = useState<Subject[]>([])

  function sendRollback(){

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
}

const cuiDefault = "20220579"
const nuesDefault = "446"
const codeDefault = "IS221029"
const periodDefault = "2024A"
const maxCredDefault = "29"

const Form : FC<Props> = function({label, cui, nues, code, period, maxCred}){
  const { 
    swapInRollback, checkSubjects,
    subjects 
  } = useUNSA_Student({
    cui: cui || cuiDefault,
    nues: nues || nuesDefault,
    code: code || codeDefault,
    period: period || periodDefault,
    maxCred: maxCred || maxCredDefault,
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
      <RollBackSettings  swapSubject={swapInRollback} />
      <input type="submit" value="enviar"  className="rounded-lg border-white border p-2 uppercase m-4 " />
      <button type="button" onClick={checkSubjects}> Revisar Cursos </button>
    </form>
  )
}

export default Form
// http://extranet.unsa.edu.pe/sisacad/matint_24a_v1a/academico.php
