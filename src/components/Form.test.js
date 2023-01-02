import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('FormTest', () => {
    it('should render component', () => {
        render(<Form />);
    });

    it('should render with snapshot', () => {
        const {asFragment} = render(<Form />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('component should have className form', () => {
        render(<Form testId='formId' classForm='form' />);
        expect(screen.getByTestId('formId')).toHaveClass('form');
    });
})