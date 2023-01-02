import crypto from "crypto";

// 🍥 hash, preHash (이전 Hash), height (블록의 Index 위치), data (Data in the Block)
interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  // 🍥 hash는 prevHash, height, data를 갖고 다시 hash되어야 한다.
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    // hash 생성
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}
