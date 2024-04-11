import React, {useRef}from 'react'

function useLogin(){
  const user = useRef("")
  const passwd = useRef("") 
  const school = useRef("")
  function login(){
    const user_value = user.current.value
    const passwd_value = passwd.current.value
    const school_value = school.current.value
    alert(user_value + ":"+ passwd_value)

    const url = "http://extranet.unsa.edu.pe/sisacad/matint_24a_v1a/acad_usuario.php"
    
    const res = fetch(url,{
      method: "POST",
      headers: {
        "Content-Type" : "application/x-www-form-urlencoded"
      },
      body: "logi_oper=" + user_value + "&pass_oper=" + passwd_value + "&escuela=" + school_value
    }).catch((e)=>{
      console.log(e)
    })

    res.then(data => data.text).then((data) => {
      console.log(data)
    })
  }

  function refetch() {
    window.location.href = "http://extranet.unsa.edu.pe/sisacad/matint_24a_v1a/acad_login.php"
  }

  return {user, passwd, login, refetch, school}
}

export default function Header() {
  const {user, passwd, login, school, refetch} = useLogin()
  return (
    <form >
      <input ref={user} type="text" name="logi_oper" value="spisjrzd" />
      <input ref={passwd} type="passwd" name="pass_oper" value="11122172" />
      <input ref={school} type="text" name="escuela" value="4460" />
      <button type="button" onClick={refetch}> LogIn </button>
    </form>
  )
}
