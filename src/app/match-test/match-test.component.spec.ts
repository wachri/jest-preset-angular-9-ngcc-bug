import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MatchTestComponent } from "./match-test.component";
import { prepareTestEnvironment } from "@hetznercloud/ngx-prepare-test-environment";

describe("MatchTestComponent", () => {
  let component: MatchTestComponent;
  let fixture: ComponentFixture<MatchTestComponent>;

  prepareTestEnvironment({
    declarations: [MatchTestComponent]
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should match snapshot`, () => {
    expect(fixture).toMatchSnapshot();
  });
});
