import Hospital from "@lerna-test-typescript-npm/hospital";

export default class Patient {
  get(id) {
    return {};
  }

  hospital: Hospital= new Hospital();

  yell(){
    console.log('paitent hosipital',this.hospital)
  }
}
