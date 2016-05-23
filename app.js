var data = [
    {
        "city": "Highland",
        "email": "washingtonvalentine@flotonic.com"
    },
    {
        "city": "Gardiner",
        "email": "thompsondawson@syntac.com"
    },
    {
        "city": "Ogema",
        "email": "juliettecrosby@suremax.com"
    },
    {
        "city": "Mooresburg",
        "email": "shepherdfarrell@confrenzy.com"
    },
    {
        "city": "Snowville",
        "email": "franksleon@zaggles.com"
    },
    {
        "city": "Newcastle",
        "email": "fishermcdonald@updat.com"
    },
    {
        "city": "Chloride",
        "email": "hardymedina@hydrocom.com"
    },
    {
        "city": "Sabillasville",
        "email": "brittedwards@zipak.com"
    },
    {
        "city": "Nord",
        "email": "francesrollins@premiant.com"
    },
    {
        "city": "Groveville",
        "email": "blevinscompton@octocore.com"
    },
    {
        "city": "Breinigsville",
        "email": "genachambers@verbus.com"
    },
    {
        "city": "Mammoth",
        "email": "francomacias@franscene.com"
    },
    {
        "city": "Chesterfield",
        "email": "angelinebyrd@electonic.com"
    },
    {
        "city": "Falconaire",
        "email": "lloydnoble@makingway.com"
    },
    {
        "city": "Jessie",
        "email": "beckysilva@powernet.com"
    },
    {
        "city": "Sanford",
        "email": "fitzgeraldworkman@kiggle.com"
    },
    {
        "city": "Beaulieu",
        "email": "leeunderwood@digigene.com"
    },
    {
        "city": "Bowie",
        "email": "aileenharris@martgo.com"
    },
    {
        "city": "Elrama",
        "email": "braycopeland@biotica.com"
    },
    {
        "city": "Felt",
        "email": "haleydale@geekfarm.com"
    },
    {
        "city": "Levant",
        "email": "walljoyner@quilk.com"
    },
    {
        "city": "Forbestown",
        "email": "melendezodom@hopeli.com"
    },
    {
        "city": "Glendale",
        "email": "claytonterry@sloganaut.com"
    },
    {
        "city": "Escondida",
        "email": "daughertymaxwell@quizka.com"
    },
    {
        "city": "Logan",
        "email": "deanraymond@overfork.com"
    },
    {
        "city": "Walland",
        "email": "annaknowles@earthmark.com"
    },
    {
        "city": "Camptown",
        "email": "cochranshelton@omatom.com"
    },
    {
        "city": "Babb",
        "email": "lyndareeves@stralum.com"
    },
    {
        "city": "Tampico",
        "email": "montoyacleveland@emtrak.com"
    },
    {
        "city": "Defiance",
        "email": "tamekapeterson@exospeed.com"
    },
    {
        "city": "Florence",
        "email": "hubbardbullock@geofarm.com"
    },
    {
        "city": "Caln",
        "email": "linanielsen@musaphics.com"
    },
    {
        "city": "Summerfield",
        "email": "penelopebray@kidstock.com"
    },
    {
        "city": "Bison",
        "email": "patsymccarty@datagene.com"
    },
    {
        "city": "Cedarville",
        "email": "holmespatrick@eventix.com"
    },
    {
        "city": "Waikele",
        "email": "dickersonwilliams@geekosis.com"
    },
    {
        "city": "Campo",
        "email": "spencerwoodard@qualitex.com"
    },
    {
        "city": "Grantville",
        "email": "lambertlarsen@zolar.com"
    },
    {
        "city": "Yettem",
        "email": "lakishadennis@kidgrease.com"
    },
    {
        "city": "Ribera",
        "email": "branchchang@kegular.com"
    },
    {
        "city": "Loyalhanna",
        "email": "augustafoley@cubix.com"
    }
];
var app = angular.module('app', ['angularUtils.directives.dirPagination']);
app.controller('MainController', function ($scope) {
    $scope.data = data;
    $scope.type = 'any';
    $scope.search = "";
    $scope.options = [
        {value: 'any', label: 'Any'},
        {value: 'city', label: 'City'},
        {value: 'email', label: 'E-mail'},
    ];
    $scope.filter = function (value, index, array) {
        var result = false;
        switch ($scope.type) {
            case 'any':
                result =
                    equal(value.city, $scope.search) ||
                    equal(value.email, $scope.search);
                break;
            default:
                result = equal(value[$scope.type], $scope.search);
        }
        return result;
    };

    function equal(value1, value2) {
        return value1.toLowerCase().indexOf(value2) != -1;
    }
});