  window.Parsley
      .addValidator('cpf', {
          validateString: function(value) {     
              return validateCPF(value);
          },
          messages: {
              'en': '↑ Invalid CPF (example: 001.234.567-89) ¬',
              'pt-br': '↑ CPF Inválido (exemplo: 001.234.567-89) ¬',
          }
  });
