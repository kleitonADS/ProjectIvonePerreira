
            document.getElementById('post01').style.display ='block';
            document.getElementById('post02').style.display ='none';
            document.getElementById('post03').style.display ='none';
            document.getElementById('post04').style.display ='none';
            document.getElementById('post05').style.display ='none';
            document.getElementById('post06').style.display ='none';
            document.getElementById('post07').style.display ='none';
            document.getElementById('post08').style.display ='none';
            document.getElementById('post09').style.display ='none';
            document.getElementById('post10').style.display ='none';
            document.getElementById('post11').style.display ='none';
            document.getElementById('post12').style.display ='none';
            document.getElementById('post13').style.display ='none';
            document.getElementById('post14').style.display ='none';

// document.addEventListener("DOMContentLoaded", function() {
//     // code
//     console.log('aqui');
//   });

document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.list-imgs-video')) return;

	// Don't follow the link
	event.preventDefault();



	// Log the clicked element in the console
	// console.log(event.target.id);
    var coverid = event.target.id;
    console.log(coverid);
    switch (coverid) {

        case 'covervideo001':
            document.getElementById('post01').style.display ='block';
            document.getElementById('post02').style.display ='none';
            document.getElementById('post03').style.display ='none';
            document.getElementById('post04').style.display ='none';
            document.getElementById('post05').style.display ='none';
            document.getElementById('post06').style.display ='none';
            document.getElementById('post07').style.display ='none';
            document.getElementById('post08').style.display ='none';
            document.getElementById('post09').style.display ='none';
            document.getElementById('post10').style.display ='none';
            document.getElementById('post11').style.display ='none';
            document.getElementById('post12').style.display ='none';
            document.getElementById('post13').style.display ='none';
            document.getElementById('post14').style.display ='none';
            
            break;

        case 'covervideo002':
            document.getElementById('post01').style.display ='none';
            document.getElementById('post02').style.display ='block';
            document.getElementById('post03').style.display ='none';
            document.getElementById('post04').style.display ='none';
            document.getElementById('post05').style.display ='none';
            document.getElementById('post06').style.display ='none';
            document.getElementById('post07').style.display ='none';
            document.getElementById('post08').style.display ='none';
            document.getElementById('post09').style.display ='none';
            document.getElementById('post10').style.display ='none';
            document.getElementById('post11').style.display ='none';
            document.getElementById('post12').style.display ='none';
            document.getElementById('post13').style.display ='none';
            document.getElementById('post14').style.display ='none';
            
            break;

            case 'covervideo003':
                document.getElementById('post01').style.display ='nome';
                document.getElementById('post02').style.display ='none';
                document.getElementById('post03').style.display ='block';
                document.getElementById('post04').style.display ='none';
                document.getElementById('post05').style.display ='none';
                document.getElementById('post06').style.display ='none';
                document.getElementById('post07').style.display ='none';
                document.getElementById('post08').style.display ='none';
                document.getElementById('post09').style.display ='none';
                document.getElementById('post10').style.display ='none';
                document.getElementById('post11').style.display ='none';
                document.getElementById('post12').style.display ='none';
                document.getElementById('post13').style.display ='none';
                document.getElementById('post14').style.display ='none';
                
                break;

                case 'covervideo004':
                document.getElementById('post01').style.display ='nome';
                document.getElementById('post02').style.display ='none';
                document.getElementById('post03').style.display ='none';
                document.getElementById('post04').style.display ='block';
                document.getElementById('post05').style.display ='none';
                document.getElementById('post06').style.display ='none';
                document.getElementById('post07').style.display ='none';
                document.getElementById('post08').style.display ='none';
                document.getElementById('post09').style.display ='none';
                document.getElementById('post10').style.display ='none';
                document.getElementById('post11').style.display ='none';
                document.getElementById('post12').style.display ='none';
                document.getElementById('post13').style.display ='none';
                document.getElementById('post14').style.display ='none';
                
                break;

                case 'covervideo005':
                document.getElementById('post01').style.display ='nome';
                document.getElementById('post02').style.display ='none';
                document.getElementById('post03').style.display ='none';
                document.getElementById('post04').style.display ='none';
                document.getElementById('post05').style.display ='block';
                document.getElementById('post06').style.display ='none';
                document.getElementById('post07').style.display ='none';
                document.getElementById('post08').style.display ='none';
                document.getElementById('post09').style.display ='none';
                document.getElementById('post10').style.display ='none';
                document.getElementById('post11').style.display ='none';
                document.getElementById('post12').style.display ='none';
                document.getElementById('post13').style.display ='none';
                document.getElementById('post14').style.display ='none';
                
                break;

                case 'covervideo006':
                document.getElementById('post01').style.display ='nome';
                document.getElementById('post02').style.display ='none';
                document.getElementById('post03').style.display ='none';
                document.getElementById('post04').style.display ='none';
                document.getElementById('post05').style.display ='none';
                document.getElementById('post06').style.display ='block';
                document.getElementById('post07').style.display ='none';
                document.getElementById('post08').style.display ='none';
                document.getElementById('post09').style.display ='none';
                document.getElementById('post10').style.display ='none';
                document.getElementById('post11').style.display ='none';
                document.getElementById('post12').style.display ='none';
                document.getElementById('post13').style.display ='none';
                document.getElementById('post14').style.display ='none';
                
                break;

                case 'covervideo007':
                document.getElementById('post01').style.display ='nome';
                document.getElementById('post02').style.display ='none';
                document.getElementById('post03').style.display ='none';
                document.getElementById('post04').style.display ='none';
                document.getElementById('post05').style.display ='none';
                document.getElementById('post06').style.display ='none';
                document.getElementById('post07').style.display ='block';
                document.getElementById('post08').style.display ='none';
                document.getElementById('post09').style.display ='none';
                document.getElementById('post10').style.display ='none';
                document.getElementById('post11').style.display ='none';
                document.getElementById('post12').style.display ='none';
                document.getElementById('post13').style.display ='none';
                document.getElementById('post14').style.display ='none';
                
                break;

                case 'covervideo008':
                document.getElementById('post01').style.display ='nome';
                document.getElementById('post02').style.display ='none';
                document.getElementById('post03').style.display ='none';
                document.getElementById('post04').style.display ='none';
                document.getElementById('post05').style.display ='none';
                document.getElementById('post06').style.display ='none';
                document.getElementById('post07').style.display ='none';
                document.getElementById('post08').style.display ='block';
                document.getElementById('post09').style.display ='none';
                document.getElementById('post10').style.display ='none';
                document.getElementById('post11').style.display ='none';
                document.getElementById('post12').style.display ='none';
                document.getElementById('post13').style.display ='none';
                document.getElementById('post14').style.display ='none';
                
                break;

                case 'covervideo009':
                document.getElementById('post01').style.display ='nome';
                document.getElementById('post02').style.display ='none';
                document.getElementById('post03').style.display ='none';
                document.getElementById('post04').style.display ='none';
                document.getElementById('post05').style.display ='none';
                document.getElementById('post06').style.display ='none';
                document.getElementById('post07').style.display ='none';
                document.getElementById('post08').style.display ='none';
                document.getElementById('post09').style.display ='block';
                document.getElementById('post10').style.display ='none';
                document.getElementById('post11').style.display ='none';
                document.getElementById('post12').style.display ='none';
                document.getElementById('post13').style.display ='none';
                document.getElementById('post14').style.display ='none';
                
                break;

                case 'covervideo010':
                document.getElementById('post01').style.display ='nome';
                document.getElementById('post02').style.display ='none';
                document.getElementById('post03').style.display ='none';
                document.getElementById('post04').style.display ='none';
                document.getElementById('post05').style.display ='none';
                document.getElementById('post06').style.display ='none';
                document.getElementById('post07').style.display ='none';
                document.getElementById('post08').style.display ='none';
                document.getElementById('post09').style.display ='none';
                document.getElementById('post10').style.display ='block';
                document.getElementById('post11').style.display ='none';
                document.getElementById('post12').style.display ='none';
                document.getElementById('post13').style.display ='none';
                document.getElementById('post14').style.display ='none';
                
                break;

                case 'covervideo011':
                document.getElementById('post01').style.display ='nome';
                document.getElementById('post02').style.display ='none';
                document.getElementById('post03').style.display ='none';
                document.getElementById('post04').style.display ='none';
                document.getElementById('post05').style.display ='none';
                document.getElementById('post06').style.display ='none';
                document.getElementById('post07').style.display ='none';
                document.getElementById('post08').style.display ='none';
                document.getElementById('post09').style.display ='none';
                document.getElementById('post10').style.display ='none';
                document.getElementById('post11').style.display ='block';
                document.getElementById('post12').style.display ='none';
                document.getElementById('post13').style.display ='none';
                document.getElementById('post14').style.display ='none';
                
                break;

                case 'covervideo012':
                document.getElementById('post01').style.display ='nome';
                document.getElementById('post02').style.display ='none';
                document.getElementById('post03').style.display ='none';
                document.getElementById('post04').style.display ='none';
                document.getElementById('post05').style.display ='none';
                document.getElementById('post06').style.display ='none';
                document.getElementById('post07').style.display ='none';
                document.getElementById('post08').style.display ='none';
                document.getElementById('post09').style.display ='none';
                document.getElementById('post10').style.display ='none';
                document.getElementById('post11').style.display ='none';
                document.getElementById('post12').style.display ='block';
                document.getElementById('post13').style.display ='none';
                document.getElementById('post14').style.display ='none';
                
                break;

                case 'covervideo013':
                document.getElementById('post01').style.display ='nome';
                document.getElementById('post02').style.display ='none';
                document.getElementById('post03').style.display ='none';
                document.getElementById('post04').style.display ='none';
                document.getElementById('post05').style.display ='none';
                document.getElementById('post06').style.display ='none';
                document.getElementById('post07').style.display ='none';
                document.getElementById('post08').style.display ='none';
                document.getElementById('post09').style.display ='none';
                document.getElementById('post10').style.display ='none';
                document.getElementById('post11').style.display ='none';
                document.getElementById('post12').style.display ='none';
                document.getElementById('post13').style.display ='block';
                document.getElementById('post14').style.display ='none';
                
                break;

                case 'covervideo014':
                document.getElementById('post01').style.display ='nome';
                document.getElementById('post02').style.display ='none';
                document.getElementById('post03').style.display ='none';
                document.getElementById('post04').style.display ='none';
                document.getElementById('post05').style.display ='none';
                document.getElementById('post06').style.display ='none';
                document.getElementById('post07').style.display ='none';
                document.getElementById('post08').style.display ='none';
                document.getElementById('post09').style.display ='none';
                document.getElementById('post10').style.display ='none';
                document.getElementById('post11').style.display ='none';
                document.getElementById('post12').style.display ='none';
                document.getElementById('post13').style.display ='none';
                document.getElementById('post14').style.display ='block';
                
                break;

    
    
        default:


            break;
    }

}, false);