import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            <Button color='blue' style={{marginTop:"1px",marginBottom:"1px"}} onClick={signIn}>Giriş Yap</Button>
            <Button  color='teal' style={{marginLeft:"0.5em",marginTop:"1px",marginBottom:"1px"}} >Kayıt Ol</Button>
            </Menu.Item>
            
        </div>
    )
}
