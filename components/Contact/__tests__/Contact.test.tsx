import { render, screen } from '@testing-library/react';

import Contact from '../Contact';

describe('Contact Component', () => {
  it('renders the heading, subtitle, and social links', () => {
    render(<Contact />);

    expect(screen.getByRole('heading', { name: 'Contacto' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Abrir perfil en X' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Abrir perfil en LinkedIn' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Abrir perfil en GitHub' })).toBeInTheDocument();
  });
});
