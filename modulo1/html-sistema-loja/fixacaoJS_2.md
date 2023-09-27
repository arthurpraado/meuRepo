```function calculaPrecoTotal(quantidade) {
  let maca = 0
  let custoTotal = 0
  if (quantidade >= 12) {
    let maca = 1
    custoTotal = maca * quantidade
  } if (quantidade < 12) {
        let maca = 1.30
        custoTotal = maca * quantidade
  }
  return custoTotal
}```
