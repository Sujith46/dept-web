const sizes = {
    mobile: "480",
    tablets: "768",
    laptops: "1024",
    desktops: "1200",
}

export const device = {
    mobile: `(max-width: ${sizes.mobile}px)`,
    tablets: `(min-width:${Number(sizes.mobile) + 1}px) and (max-width:${sizes.tablets}px )`,
    laptops: `(min-width:${Number(sizes.tablets) + 1}px) and (max-width: ${sizes.laptops}px )`,
    large: `(min-width: 1201px)`,
} 