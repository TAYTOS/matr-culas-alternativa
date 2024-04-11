import React from "react";
import { FC } from "react";
interface Props {
  data : Subject[]
}

export interface Subject {
  name? :string,
  id: string,
  group: string,
  mat: number,
  credits: number,
}

const RollBackSettings : FC<Props> = function({data}){
  return (
    <div>
      {data.map(function(e){

        return (
          <SubjectSettings {...e}  key={e.id}/>
        )
      })}
    </div>
  )
}

const SubjectSettings : FC<Subject> = function({name, group}){


  return (
    <button type="button" className="rounded-lg p-1">
      <h3>
        {name}
        <small>
          - {group}
        </small>
      </h3>
    </button>
  )
}

export default RollBackSettings