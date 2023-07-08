          // Function to retrieve form data and append to new_characters array
        $(document).ready(function() {
          var new_characters = JSON.parse(localStorage.getItem('new_characters')) || [];

          function saveCharacterInfo() {
            // Get the form data  // Define the new_characters array
            var name = $('#char_form input[name="name"]').val();
            var gender = $('#char_form input[name="gender"]:checked').val();
            var relationship = $('#char_form input[name="relationship"]:checked').val();
            var talkingContext = $('#char_form input[name="context"]:checked').val();
            var interests = [];
            $('#char_form input[name="interest"]:checked').each(function() {
              interests.push($(this).val());
            });
            var hates = $('#char_form input[name="hates"]').val();
            var otherInfo = $('#char_form input[name="other_info"]').val();
    
            // Create a new character object
            var character = {
              name: name,
              gender: gender,
              relationship: relationship,
              talking_context: talkingContext,
              interests: interests,
              hates: hates,
              other_info: otherInfo
            };
    
            // Append the character object to the new_characters array
            new_characters.push(character);
    
            // Log the new_characters array for testing
            console.log(new_characters);
            localStorage.setItem('new_characters', JSON.stringify(new_characters));
          }
    
          // Event handler for save_info button click
          $('#save_info').on('click', function(event) {
            event.preventDefault(); // Prevent form submission
            saveCharacterInfo();
            $('#char_form input[type="checkbox"]:checked, #char_form input[type="text"], #char_form textarea').val('')
            $('#char_form input[type="checkbox"]:checked').prop('checked', false);
            $('#char_form input[type="radio"]:checked').prop('checked', false);
            window.close();

          // Refresh home.html page
          // window.opener.location.reload();
          });
        });

        //Dark mode
        const darkModeButton = document.getElementById('mymode');
        const htmlRoot = document.querySelector('html');
        
        
        darkModeButton.addEventListener('click', () => {
          if (htmlRoot.getAttribute('data-bs-theme') === 'dark') {
            htmlRoot.removeAttribute('data-bs-theme');
            darkModeButton.textContent = 'Dark mode'
          } else {
            htmlRoot.setAttribute('data-bs-theme', 'dark');
            darkModeButton.textContent = 'Light mode'
          }
        });
        