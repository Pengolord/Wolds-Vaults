
onEvent("recipes", event => {
    event.shaped(Item.of('sophisticatedstorage:treasure_chest'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'the_vault:treasure_chest_placeable',
        X: 'the_vault:vault_diamond_block',
        I: 'the_vault:gem_pog'
    })

    event.shaped(Item.of('sophisticatedstorage:wooden_chest'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'the_vault:wooden_chest_placeable',
        X: 'the_vault:vault_diamond',
        I: 'the_vault:wooden_planks'
    })

    event.shaped(Item.of('sophisticatedstorage:hardened_chest'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'the_vault:hardened_chest_placeable',
        X: 'the_vault:vault_stone',
        I: 'the_vault:chromatic_iron_ingot'
    })

    event.shaped(Item.of('sophisticatedstorage:flesh_chest'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'the_vault:flesh_chest_placeable',
        X: 'the_vault:regret_chunk',
        I: 'the_vault:vault_meat_block'
    })

    event.shaped(Item.of('sophisticatedstorage:enigma_chest'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'the_vault:enigma_chest_placeable',
        X: 'the_vault:black_chromatic_steel_ingot',
        I: 'the_vault:perfect_wutodie'
    })


    event.shaped(Item.of('sophisticatedstorage:altar_chest'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'the_vault:altar_chest_placeable',
        X: 'the_vault:black_chromatic_steel_ingot',
        I: 'the_vault:perfect_larimar'
    })

    event.shaped(Item.of('sophisticatedstorage:living_chest'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'the_vault:living_chest_placeable',
        X: 'the_vault:mossy_bone_block',
        I: 'the_vault:perfect_alexandrite'
    })

    event.shaped(Item.of('sophisticatedstorage:ornate_chest'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'the_vault:ornate_chest_placeable',
        X: 'the_vault:ornate_block',
        I: 'the_vault:perfect_painite'
    })

    event.shaped(Item.of('sophisticatedstorage:gilded_chest'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'the_vault:gilded_chest_placeable',
        X: 'the_vault:gilded_block',
        I: 'the_vault:chromatic_gold_ingot'
    })


    event.shaped(Item.of('sophisticatedstorage:ornate_strongbox'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'sophisticatedstorage:ornate_chest',
        X: 'the_vault:perfect_painite',
        I: 'the_vault:ornate_chest_scroll'
    })

    event.shaped(Item.of('sophisticatedstorage:gilded_strongbox'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'sophisticatedstorage:gilded_chest',
        X: 'the_vault:chromatic_gold_ingot',
        I: 'the_vault:gilded_chest_scroll'
    })

    event.shaped(Item.of('sophisticatedstorage:living_strongbox'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'sophisticatedstorage:living_chest',
        X: 'the_vault:perfect_alexandrite',
        I: 'the_vault:living_chest_scroll'
    })
})