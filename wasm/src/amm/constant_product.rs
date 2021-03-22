pub type AtomicAmount = u128;

/// Defines the depth of the two pools that are part of the swap
pub struct Pools {
    pub depth_x: AtomicAmount,
    pub depth_y: AtomicAmount,
}

/// Constant product swap formula without fees
pub fn swap(input_amount: AtomicAmount, pools: Pools) -> f64 {
    let k = pools.depth_x * pools.depth_y;
    let how_much_to_remove_to_keep_constant =
        pools.depth_y as f64 / (input_amount + pools.depth_x) as f64;
    let output = pools.depth_y as f64 - how_much_to_remove_to_keep_constant;
    output
}

#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;

    #[test]
    fn test1() {
        let pools = Pools {
            depth_x: 10,
            depth_y: 500,
        };

        let input_amount = 1;
        let output_amount = swap(input_amount, pools);
        assert_eq!(output_amount, 454.54545454545456);
    }

    // TODO: More tests
    #[test]
    fn test2() {}
}
