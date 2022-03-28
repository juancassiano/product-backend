class ImportProductUseCase {
  constructor(private importProductUseCase: ImportProductUseCase) {}

  execute(file: any) {
    this.importProductUseCase.execute(file);
  }
}

export { ImportProductUseCase };
