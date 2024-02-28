function getElementWidth(content, padding, border) {
     const x = Number.parseFloat(content);
     const y = Number.parseFloat(padding);
     const z = Number.parseFloat(border);

     return x + (y * 2) + (z * 2);
}

