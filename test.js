var orderType ='business';
var shipMethod;

switch (orderType)
{
    case'business':
    shipMethod ='FedEx';
    break;
    case 'personal':
    shipMethod ='UPS Ground';  
    break;
    default:
        shipMethod = 'USPS';
}
    console.log(shipMethod);