import React, {Component} from 'react';
import './Main.css';
import back from './back.svg';
import news from './news.svg';
import n from './n.svg';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Mainpage extends Component {
  render() {
  return (
            <div className="Mainpage"> 
          <header>
          <img src={back} className="Main-back" alt=":)" />
          <img src={news} className="Main-n" alt=":)" />

          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row className="r">
    <Col sm={3}>
      <Nav variant="tabs" className="flex-column">
        <Nav.Item className="t">
          <Nav.Link eventKey="first">News</Nav.Link>
        </Nav.Item>
        <Nav.Item className="t">
          <Nav.Link eventKey="second">Coffee booking</Nav.Link>
        </Nav.Item>
        <Nav.Item className="t">
          <Nav.Link eventKey="3">All cafes</Nav.Link>
        </Nav.Item>
        <Nav.Item className="t">
          <Nav.Link eventKey="4">Contacts</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <div class="card">
  <img className="pict" src={n} alt="Avatar"/>
  <div class="container">
   
    <p className="picttextt">«Крепкий Черный» — это душевное место не только о кофе, но и о людях. Интерьер выполнен в минималистичном стиле и темных цветах, однако в кофейни много зелени и света. 

Фишкой заведения стала любовь к животным, куда вы можете прийти вместе со своим четвероногим другом.


Основа меню – кофе. Также в кофейни вам предложат: экспрессо, американо, капучино, латте и авторские вариации кофе. Но есть и другие напитки – чай, смузи, лимонады, какао, глинтвейн.

Адрес: ул. Щорса, 11а (ТЦ Казарма Молл)</p> 
  </div>
       </div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        </header>
   </div>
    
      
      );
  
  }
}

export default Mainpage;