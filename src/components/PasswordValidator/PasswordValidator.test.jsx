import { render, screen } from '@testing-library/react';

import PasswordValidator from './PasswordValidator';

describe('PasswordValidator tests', () => {
  describe('hasNumber rule', () => {
    it('Displays the hasNumber requirement message', () => {
      render(<PasswordValidator rules={['hasNumber']} value="" onChange={() => {}} />);
      expect(screen.getByText('Has a number 0-9')).toBeInTheDocument();
    });

    it('Displays hasNumber requirement as valid', () => {
      render(<PasswordValidator rules={['hasNumber']} value="a123" onChange={() => {}} />);
      expect(screen.getByText('✔')).toBeInTheDocument();
    });

    it('Displays hasNumber requirement as invalid', () => {
      render(<PasswordValidator rules={['hasNumber']} value="abc" onChange={() => {}} />);
      expect(screen.getByText('x')).toBeInTheDocument();
    });
  });

  describe('hasSpecialChar rule', () => {
    it('Displays the hasSpecialChar requirement message', () => {
      render(<PasswordValidator rules={['hasSpecialChar']} value="" onChange={() => {}} />);
      expect(screen.getByText('Has a special char !@#$%^&*')).toBeInTheDocument();
    });

    it('Displays hasSpecialChar requirement as valid', () => {
      render(<PasswordValidator rules={['hasSpecialChar']} value="abcd!" onChange={() => {}} />);
      expect(screen.getByText('✔')).toBeInTheDocument();
    });

    it('Displays hasSpecialChar requirement as invalid', () => {
      render(<PasswordValidator rules={['hasSpecialChar']} value="abc" onChange={() => {}} />);
      expect(screen.getByText('x')).toBeInTheDocument();
    });
  });

  describe('hasUppercaseLetter rule', () => {
    it('Displays the hasUppercaseLetter requirement message', () => {
      render(<PasswordValidator rules={['hasUppercaseLetter']} value="" onChange={() => {}} />);
      expect(screen.getByText('Has uppercase letter')).toBeInTheDocument();
    });

    it('Displays hasUppercaseLetter requirement as valid', () => {
      render(<PasswordValidator rules={['hasUppercaseLetter']} value="abcD1" onChange={() => {}} />);
      expect(screen.getByText('✔')).toBeInTheDocument();
    });

    it('Displays hasUppercaseLetter requirement as invalid', () => {
      render(<PasswordValidator rules={['hasUppercaseLetter']} value="abc123" onChange={() => {}} />);
      expect(screen.getByText('x')).toBeInTheDocument();
    });
  });

  describe('hasNoConsecutiveRepeatingLetters rule', () => {
    it('Displays the hasNoConsecutiveRepeatingLetters requirement message', () => {
      render(<PasswordValidator rules={['hasNoConsecutiveRepeatingLetters']} value="" onChange={() => {}} />);
      expect(screen.getByText('Has no consecutive repeating letters')).toBeInTheDocument();
    });

    it('Displays hasNoConsecutiveRepeatingLetters requirement as valid', () => {
      render(<PasswordValidator rules={['hasNoConsecutiveRepeatingLetters']} value="abc1!" onChange={() => {}} />);
      expect(screen.getByText('✔')).toBeInTheDocument();
    });

    it('Displays hasNoConsecutiveRepeatingLetters requirement as invalid', () => {
      render(<PasswordValidator rules={['hasNoConsecutiveRepeatingLetters']} value="aaabccc" onChange={() => {}} />);
      expect(screen.getByText('x')).toBeInTheDocument();
    });
  });
});