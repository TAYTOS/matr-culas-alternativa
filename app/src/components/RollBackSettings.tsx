import React from "react";
import { FC } from "react";

interface Props {
  swapSubject(sub: Subject) : void
}

export interface Subject {
  name? :string,
  id: string,
  group: string,
  mat: number,
  credits: number,
}

interface SubjectButton {
  onClick() : void
}

const RollBackSettings : FC<Props> = function({swapSubject}){
  return (
    <div>
      {subjects.map(function(e){

        function onClick(){          
          swapSubject(e)
        }

        return (
          <SubjectSettings {...e} onClick={onClick} key={e.id}/>
        )
      })}
    </div>
  )
}

const SubjectSettings : FC<Subject & SubjectButton> = function({name, group, onClick}){

  function swapSubject (){
    alert(`${name} ; ${group}`)
  }

  return (
    <button type="button" className="rounded-lg p-1" onClick={onClick}>
      <h3>
        {name}
        <small>
          {group}
        </small>
      </h3>
    </button>
  )
}

const subjects : Subject[] = [
  {
    name: "AC",
    id : "1702122",
    group: "A",
    mat: 1,
    credits: 5,
  }
]

export default RollBackSettings