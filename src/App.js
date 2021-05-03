import { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id':1,
  'image': 'https://placeimg.com/64/64/1', //랜덤으로 이미지를 보여주는 사이트 64*64로
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
'id':2,
  'image': 'https://placeimg.com/64/64/2', //랜덤으로 이미지를 보여주는 사이트 64*64로
  'name': '홍순이',
  'birthday': '951212',
  'gender': '여자',
  'job': '백조'
},
{
'id':3,
  'image': 'https://placeimg.com/64/64/3', //랜덤으로 이미지를 보여주는 사이트 64*64로
  'name': '일돌이',
  'birthday': '201221',
  'gender': '남자',
  'job': '백수'
}
]

class App extends Component {
  render() {
    return(
      <div>
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
