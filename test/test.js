
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Página HTML', () => {
  let dom;
  
  beforeEach(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    dom = new JSDOM(html);
    global.document = dom.window.document;
  });

  test('La página tiene el título "¡Hola Mundo!"', () => {
    const titulo = document.getElementById('titulo');
    expect(titulo).not.toBeNull();
    expect(titulo.textContent).toBe('¡Hola Mundo!');
  });

  test('La página contiene un párrafo de bienvenida', () => {
    const parrafos = document.querySelectorAll('p');
    expect(parrafos.length).toBeGreaterThan(0);
    
    let contieneBienvenido = false;
    parrafos.forEach(p => {
      if (p.textContent.includes('Bienvenido')) {
        contieneBienvenido = true;
      }
    });
    
    expect(contieneBienvenido).toBe(true);
  });
});