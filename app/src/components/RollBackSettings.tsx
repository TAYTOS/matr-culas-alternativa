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
    name: "PROGRAMACION WEB 2	",
    id : "1702122",
    group: "A",
    mat: 1,
    credits: 4,
  },
  {
    name: "BASE DE DATOS	",
    id : "1703133",
    group: "A",
    mat: 1,
    credits: 4,
  },
  {
    name: "PROGRAMACION DE SISTEMAS	",
    id : "1703134",
    group: "A",
    mat: 1,
    credits: 4,
  },
  {
    name: "TEORIA DE LA COMPUTACION	",
    id : "1703136",
    group: "A",
    mat: 1,
    credits: 3,
  },
  {
    name: "ORGANIZACION Y METODOS	",
    id : "1703137",
    group: "A",
    mat: 1,
    credits: 3,
  },
  {
    name: "INVESTIGACION DE OPERACIONES	",
    id : "1703138",
    group: "A",
    mat: 1,
    credits: 4,
  }
]
const subjects_2 : Subject[] = [
  {
    name: "PROGRAMACION WEB 2	",
    id : "1702122",
    group: "A",
    mat: 1,
    credits: 4,
  },
  {
    name: "PROGRAMACION DE SISTEMAS	",
    id : "1703134",
    group: "A",
    mat: 1,
    credits: 4,
  },
  {
    name: "TEORIA DE LA COMPUTACION	",
    id : "1703136",
    group: "A",
    mat: 1,
    credits: 3,
  },
  {
    name: "ORGANIZACION Y METODOS	",
    id : "1703137",
    group: "A",
    mat: 1,
    credits: 3,
  },
  {
    name: "INVESTIGACION DE OPERACIONES	",
    id : "1703138",
    group: "A",
    mat: 1,
    credits: 4,
  }
]

const subjects_3 : Subject[] = [
  {
    name: "PROGRAMACION WEB 2	",
    id : "1702122",
    group: "C",
    mat: 1,
    credits: 4,
  },
  {
    name: "BASE DE DATOS	",
    id : "1703133",
    group: "A",
    mat: 1,
    credits: 4,
  },
  {
    name: "PROGRAMACION DE SISTEMAS	",
    id : "1703134",
    group: "A",
    mat: 1,
    credits: 4,
  },
  {
    name: "TEORIA DE LA COMPUTACION	",
    id : "1703136",
    group: "A",
    mat: 1,
    credits: 3,
  },
  {
    name: "ORGANIZACION Y METODOS	",
    id : "1703137",
    group: "A",
    mat: 1,
    credits: 3,
  },
  {
    name: "INVESTIGACION DE OPERACIONES	",
    id : "1703138",
    group: "A",
    mat: 1,
    credits: 4,
  }
]

const subjects_4 : Subject[] = [
  {
    name: "BASE DE DATOS	",
    id : "1703133",
    group: "A",
    mat: 1,
    credits: 4,
  },
  {
    name: "PROGRAMACION DE SISTEMAS	",
    id : "1703134",
    group: "A",
    mat: 1,
    credits: 4,
  },
  {
    name: "TEORIA DE LA COMPUTACION	",
    id : "1703136",
    group: "A",
    mat: 1,
    credits: 3,
  },
  {
    name: "ORGANIZACION Y METODOS	",
    id : "1703137",
    group: "A",
    mat: 1,
    credits: 3,
  },
  {
    name: "INVESTIGACION DE OPERACIONES	",
    id : "1703138",
    group: "A",
    mat: 1,
    credits: 4,
  }
]

const subjects_5 : Subject[] = [
  {
    name: "PROGRAMACION WEB 2	",
    id : "1702122",
    group: "A",
    mat: 1,
    credits: 4,
  },
  {
    name: "PROGRAMACION DE SISTEMAS	",
    id : "1703134",
    group: "A",
    mat: 1,
    credits: 4,
  },
  {
    name: "TEORIA DE LA COMPUTACION	",
    id : "1703136",
    group: "A",
    mat: 1,
    credits: 3,
  },
  {
    name: "ORGANIZACION Y METODOS	",
    id : "1703137",
    group: "A",
    mat: 1,
    credits: 3,
  },
  {
    name: "INVESTIGACION DE OPERACIONES	",
    id : "1703138",
    group: "A",
    mat: 1,
    credits: 4,
  }
]
const subjects_6 : Subject[] = [
  {
    name: "PROGRAMACION WEB 2	",
    id : "1702122",
    group: "A",
    mat: 1,
    credits: 4,
  },
  {
    name: "BASE DE DATOS	",
    id : "1703133",
    group: "B",
    mat: 1,
    credits: 4,
  },
  {
    name: "PROGRAMACION DE SISTEMAS	",
    id : "1703134",
    group: "B",
    mat: 1,
    credits: 4,
  },
  {
    name: "TEORIA DE LA COMPUTACION	",
    id : "1703136",
    group: "B",
    mat: 1,
    credits: 3,
  },
  {
    name: "ORGANIZACION Y METODOS	",
    id : "1703137",
    group: "B",
    mat: 1,
    credits: 3,
  },
  {
    name: "INVESTIGACION DE OPERACIONES	",
    id : "1703138",
    group: "B",
    mat: 1,
    credits: 4,
  }
]


export default RollBackSettings