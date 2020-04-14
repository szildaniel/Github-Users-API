import React from 'react';
import { render, cleanup } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';

import Header from '../components/Header';

afterEach(cleanup);

describe("Header Component",  () => { 
    it("header component should render sun icon", () => {
        const { getByTestId } = render(<Header />)
    
        expect(getByTestId('icon')).toBeDefined(); 
    })
})