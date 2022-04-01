var playerData = {
    trianglesAmount: new Decimal("1e30"),
    trianglesGenerator: {
        lightning: {
            hasUnlocked: false,
            showUnlock: new Decimal("1e18"),
            cost: new Decimal("1e20"),
            costIncrease: new Decimal("10"),
            lightningAmount: new Decimal("0"),
            effectiveness: new Decimal("1"),
            lightningGenerator: {
                timer: 0,
                tier1: {
                    hasUnlocked: false,
                    cost: new Decimal("2"),
                    costIncrease: new Decimal("2"),
                    lvl: new Decimal("0")
                }
            }
        },
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
            showUnlock: new Decimal("50"),
            cost: new Decimal("100"),
            costIncrease: new Decimal("1.07"),
            lvl: new Decimal("0"),
            amountBought: 0,
            multiplier: new Decimal("1")
        },
        tier3: {
            hasUnlocked: false,
            showUnlock: new Decimal("1000"),
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
        },
        tier5: {
            hasUnlocked: false,
            showUnlock: new Decimal("1e9"),
            cost: new Decimal("1e10"),
            costIncrease: new Decimal("1.08"),
            lvl: new Decimal("0"),
            amountBought: 0,
            multiplier: new Decimal("1")
        },
        tier6: {
            hasUnlocked: false,
            showUnlock: new Decimal("1e11"),
            cost: new Decimal("1e12"),
            costIncrease: new Decimal("1.09"),
            lvl: new Decimal("0"),
            amountBought: 0,
            multiplier: new Decimal("1")
        },
        tier7: {
            hasUnlocked: false,
            showUnlock: new Decimal("5e12"),
            cost: new Decimal("1e14"),
            costIncrease: new Decimal("1.09"),
            lvl: new Decimal("0"),
            amountBought: 0,
            multiplier: new Decimal("1")
        }
    },
    shop: {
        hasUnlocked: false,
        showUnlock: new Decimal("1e5"),
        cost: new Decimal("1e6"),
        items: {
            row1: {
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
            },
            row2: {
                hasUnlocked: false,
                cost: new Decimal("1e20"),
                thunder: {
                    hasBought: false,
                    cost: new Decimal("1e22")
                },
                storm: {
                    hasBought: false,
                    cost: new Decimal("1e24")
                },
                diamond: {
                    hasBought: false,
                    cost: new Decimal("1e26")
                }
            }
        }
    }
}