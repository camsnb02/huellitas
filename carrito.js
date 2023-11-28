$(document).ready(function () {
    // Evento para agregar al carrito
    $('#productos').on('click', '.agregar-carrito', function () {
      const producto = $(this).closest('li').data('id');
      agregarAlCarrito(producto);
    });
  
    // Evento para eliminar un producto del carrito
    $('#lista-carrito').on('click', '.eliminar-producto', function () {
      const producto = $(this).closest('li').data('id');
      eliminarDelCarrito(producto);
    });
  
    // Evento para vaciar el carrito
    $('#vaciar-carrito').on('click', vaciarCarrito);
  
    function agregarAlCarrito(id) {
      // Implementa lógica para agregar productos al carrito
      const productoExistente = $('#lista-carrito').find(`li[data-id="${id}"]`);
      
      if (productoExistente.length > 0) {
        const cantidad = productoExistente.find('.cantidad');
        cantidad.text(parseInt(cantidad.text()) + 1);
      } else {
        $('#lista-carrito').append(`<li data-id="${id}">Producto ${id} <button class="eliminar-producto">Eliminar</button> <span class="cantidad">1</span></li>`);
      }
    }
  
    function eliminarDelCarrito(id) {
      // Implementa lógica para eliminar un producto del carrito
      const producto = $('#lista-carrito').find(`li[data-id="${id}"]`);
      const cantidad = producto.find('.cantidad');
  
      if (parseInt(cantidad.text()) > 1) {
        cantidad.text(parseInt(cantidad.text()) - 1);
      } else {
        producto.remove();
      }
    }
  
    function vaciarCarrito() {
      // Implementa lógica para vaciar el carrito
      $('#lista-carrito').empty();
    }
  });
  