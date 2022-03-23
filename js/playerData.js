var playerData = {
    trianglesAmount: new Decimal("2e8"),
    trianglesGenerator: {
        tier1: {
            hasUnlocked: false,
            cost: new Decimal("10"),
            costIncrease: new Decimal("1.05"),
            lvl: new Decimal("0"),
            amountBought: 0,
            multiplier: new Decimal("1")
        },
        tier2: {
            hasUnlocked: false,
            cost: new Decimal("100"),
            costIncrease: new Decimal("1.07"),
            lvl: new Decimal("0"),
            amountBought: 0,
            multiplier: new Decimal("1")
        },
        tier3: {
            hasUnlocked: false,
            cost: new Decimal("1e4"),
            costIncrease: new Decimal("1.07"),
            lvl: new Decimal("0"),
            amountBought: 0,
            multiplier: new Decimal("1")
        },
        tier4: {
            hasUnlocked: false,
            cost: new Decimal("1e8"),
            costIncrease: new Decimal("1.08"),
            lvl: new Decimal("0"),
            amountBought: 0,
            multiplier: new Decimal("1")
        }
    },
    shop: {
        hasUnlocked: false,
        items: {
            circle: {
                hasBought: false,
                cost: new Decimal("1e6")
            },
            triangles: {
                hasBought: false,
                cost: new Decimal("1e7")
            },
            square: {
                hasBought: false,
                cost: new Decimal("1e8")
            }
        }
    }
}