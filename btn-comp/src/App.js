import React from 'react';
import './App.css';

import Button from './Button/index.button';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <div className='container'>
          <h2>Buttons</h2>

          <div className='btn-row'>
            <Button type='' name={`<Button />`} />

            <Button type='outline' name={`<Button variant="outline" />`} />

            <Button type='text' name={`<Button variant="text" />`} />
          </div>

          <div className='btn-row'>
            <Button
              type='disShad'
              name={`<Button variant="disableShadow" />`}
            />
          </div>

          <div className='btn-row'>
            <Button type='' name={`<Button disabled />`} disabled={true} />

            <Button
              type='text'
              name={`<Button variant="text" disabled />`}
              disabled={true}
            />
          </div>

          <div className='btn-row'>
            <Button
              type='icon'
              name={`<Button startIcon="local_grocery_store" />`}
              icon='local_grocery_store'
              iconPos='left'
            />

            <Button
              type='icon'
              name={`<Button startIcon="local_grocery_store" />`}
              icon='local_grocery_store'
              iconPos='right'
            />
          </div>

          <div className='btn-row'>
            <Button type='disShad' size='sm' name={`<Button size="sm" />`} />

            <Button type='disShad' size='md' name={`<Button size="md" />`} />

            <Button type='disShad' size='lg' name={`<Button size="lg" />`} />
          </div>

          <div className='btn-row'>
            <Button type='' color='' name={`<Button color="default" />`} />

            <Button
              type=''
              color='primary'
              name={`<Button color="default" />`}
            />

            <Button
              type=''
              color='secondary'
              name={`<Button color="secondary" />`}
              text='Secondary'
            />

            <Button
              type=''
              color='danger'
              name={`<Button color="danger" />`}
              text='Danger'
            />
          </div>
        </div>
      </div>

      <footer className='footer'> Nate Hawley III </footer>
    </div>
  );
}

export default App;
