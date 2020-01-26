// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $('.change-devour').on('click', function(event) {
      const id = $(this).data('id');
      const newEat = $(this).data('newdevour');
  
      const newDevourState = {
        devoured: newEat,
      };
  
      // Send the PUT request.
      $.ajax('/api/burgers/' + id, {
        type: 'PUT',
        data: newDevourState,
      }).then(
          function() {
            console.log('changed devour to', newEat);
            // Reload the page to get the updated list
            location.reload();
          },
      );
    });
  
    $('.delete-burger').on('click', function(event) {
      const id = $(this).data('id');
  
      // Send the DELETE request.
      $.ajax('/api/burgers/' + id, {
        type: 'DELETE',
      }).then(
          function() {
            console.log('DELETED burger #' + id);
            // Reload the page to get the updated list
            location.reload();
          },
      );
    });
  
    $('.create-form').on('submit', function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        burger_name: $('#burger').val().trim(),
      };
  
      // Send the POST request.
      $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger,
      }).then(
          function() {
            console.log('created new burger');
            // Reload the page to get the updated list
            location.reload();
          },
      );
    });
  });
  