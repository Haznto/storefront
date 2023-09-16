import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './components/store';
import App from './App';

test('App component renders without errors', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );


    const headerElement = screen.getByText(`Hasan's Store`);

    expect(headerElement).toBeInTheDocument();
});