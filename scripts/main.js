Events.on(EventType.ContentInitEvent, cons(() => {
	const Engine = UnitType.UnitEngine;
	UnitTypes.flare.engines = new Seq([new Engine(-2, -8, 4, -90), new Engine(2, -8, 4, -90)]);
}));