export function useContact() {
  return {
    state: {
      fields: [
        { type: 'text', placeholder: 'Nombre', name: 'name' },
        { type: 'email', placeholder: 'Correo', name: 'email' },
      ] as const,
    },
    actions: {},
  } as const;
}
