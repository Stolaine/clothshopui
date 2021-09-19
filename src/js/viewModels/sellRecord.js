define(['knockout',
    'ojs/ojarraydataprovider',
    'ojs/ojknockout',
    'ojs/ojformlayout',
    'ojs/ojinputtext',
    'ojs/ojdatetimepicker',
    'ojs/ojselectsingle',
    'ojs/ojbutton',
    'ojs/ojvalidationgroup'
], function (ko, ArrayDataProvider) {
    function SellRecord() {
        var self = this;

        self.groupValid = ko.observable("invalidHidden");
        self.name = ko.observable();
        self.phoneNumber = ko.observable();
        self.date = ko.observable();
        self.itemName = ko.observable();
        self.quantity = ko.observable();
        self.unit = ko.observable();
        self.unitPrice = ko.observable();
        self.sellingPrice = ko.observable();
        self.remaining = ko.observable();

        self.phoneNumberValue = ko.computed(function () {
            return self.phoneNumber() ? self.phoneNumber() : null;
        })
        self.costPriceValue = ko.computed(function () {
            return self.quantity() * self.unitPrice();
        })
        self.profitValue = ko.computed(function () {
            return self.sellingPrice() - self.costPriceValue();
        })
        self.profitPercentageValue = ko.computed(function () {
            return self.costPriceValue() == 0 ? 100 : self.profitValue() / self.costPriceValue() * 100;
        })

        self.unitArray = [
            { value: 'm', label: 'm' },
            { value: 'null', label: 'none' }
        ]

        self.unitDP = new ArrayDataProvider(self.unitArray, {
            keyAttributes: "value"
        })

        self.submit = function () {
            var tracker = document.getElementById('tracker');
            if (tracker.valid === "valid") {
                console.log(self.row());
            } else {
                tracker.showMessages();
                tracker.focusOn("@firstInvalidShown");
            }
        }

        self.row = ko.computed(function () {
            var result = self.date() + "," + self.name() + "," + self.phoneNumberValue() + ","
                + self.itemName() + "," + self.quantity() + "," + self.unit() + ","
                + self.unitPrice() + "," + self.costPriceValue() + "," + self.sellingPrice() + ","
                + self.remaining() + "," + self.profitValue() + "," + self.profitPercentageValue();
            return result;
        })

    }
    return new SellRecord();
})