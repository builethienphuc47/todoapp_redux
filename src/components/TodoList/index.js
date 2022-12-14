import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import {useDispatch, useSelector} from 'react-redux'; 
// import { addTodo } from '../redux/actions';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import todoListSlice from './todoListSlice';
import {  todosRemainingSelector } from '../redux/selector';
export default function TodoList() {
  const [name, setName] = useState ('')
  const [priority, setPriority] = useState('Medium')

  const dispatch = useDispatch();
  
  // const todoList = useSelector(todoListSelector)
  
  // const searchText = useSelector(searchTextSelector)

  const todoList = useSelector(todosRemainingSelector)
  
  
  
  const handleAddButtonClick = () => {
    //dispacth()
    dispatch(
      todoListSlice.actions.addTodo({
      id: uuidv4(), 
      name,
      priority,
      completed: false
  })
  )
  setName("")
}
  const handleAddInputChange = (e) => {
    setName(e.target.value)
  }
  const handlePriorityChange = (value) => { 
    setPriority(value)
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map(item => 
          <Todo key={item.id} id={item.id} name={item.name} prioriry={item.priority} completed = {item.completed}/>
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={name} onChange={handleAddInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick = {handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
