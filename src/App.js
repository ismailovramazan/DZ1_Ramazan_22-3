import React from "react";
import './App.css';
import Component from "./Components/Component";
import Header from "./Header/Header";
// import Calculator from "./Calculator";
import {Button1,Button2} from "./Button/Button";
import Footer from "./Footer/Footer";
import Props from "./Content/props";
import footer from "./Footer/Footer";
import Text from "./Text/Text";
import lists from "./Header/Header"

function App() {

  const a  = 12;
  const b = 11;
  const c = a+b

  const menuList = ['Main', 'About', 'Profile',];

  const logText = (text) => console.log(text);
  return (
    <div>

        <Text />

      <Header
      menuList={menuList}
      />
      <Props
          content="Орозонус кабыл болсун"
      />

       <Footer
       footer={footer}
       Footer={Footer}
       />
      <Button1
        handleClick={logText}
        color={"red"}
        text={'Click'}
        />

      <Button2
        color={"green"}
        text={'Submit'}
        clickHandle={logText}
      />
      {/*<Calculator  />*/}
    <button onClick={() => logText('Hello World!')}>Click</button>
    </div>
  );
}

export default App;

//. Создайте еще один компонент которые должен стоят по середине
// между header и Footer и передайте ему контент(любой)
// через проспы и отобразите это.
// 4. Создайте элементы для header используя метод map
// 4. Если хотите можете все компоненты красиво стилизовать )