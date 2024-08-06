(function() {var type_impls = {
"twitch_api":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-TwitchTag\" class=\"impl\"><a class=\"src rightside\" href=\"src/twitch_api/helix/endpoints/tags/mod.rs.html#79\">source</a><a href=\"#impl-Clone-for-TwitchTag\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"twitch_api/helix/tags/struct.TwitchTag.html\" title=\"struct twitch_api::helix::tags::TwitchTag\">TwitchTag</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/twitch_api/helix/endpoints/tags/mod.rs.html#79\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"twitch_api/helix/tags/struct.TwitchTag.html\" title=\"struct twitch_api::helix::tags::TwitchTag\">TwitchTag</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#175\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","twitch_api::helix::endpoints::streams::get_stream_tags::Tag","twitch_api::helix::endpoints::tags::get_all_stream_tags::Tag"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-TwitchTag\" class=\"impl\"><a class=\"src rightside\" href=\"src/twitch_api/helix/endpoints/tags/mod.rs.html#79\">source</a><a href=\"#impl-Debug-for-TwitchTag\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"twitch_api/helix/tags/struct.TwitchTag.html\" title=\"struct twitch_api::helix::tags::TwitchTag\">TwitchTag</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/twitch_api/helix/endpoints/tags/mod.rs.html#79\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","twitch_api::helix::endpoints::streams::get_stream_tags::Tag","twitch_api::helix::endpoints::tags::get_all_stream_tags::Tag"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-TwitchTag\" class=\"impl\"><a class=\"src rightside\" href=\"src/twitch_api/helix/endpoints/tags/mod.rs.html#79\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-TwitchTag\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"twitch_api/helix/tags/struct.TwitchTag.html\" title=\"struct twitch_api::helix::tags::TwitchTag\">TwitchTag</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/twitch_api/helix/endpoints/tags/mod.rs.html#79\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(__deserializer: __D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, __D::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","twitch_api::helix::endpoints::streams::get_stream_tags::Tag","twitch_api::helix::endpoints::tags::get_all_stream_tags::Tag"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-TwitchTag\" class=\"impl\"><a class=\"src rightside\" href=\"src/twitch_api/helix/endpoints/tags/mod.rs.html#79\">source</a><a href=\"#impl-PartialEq-for-TwitchTag\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"twitch_api/helix/tags/struct.TwitchTag.html\" title=\"struct twitch_api::helix::tags::TwitchTag\">TwitchTag</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/twitch_api/helix/endpoints/tags/mod.rs.html#79\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"twitch_api/helix/tags/struct.TwitchTag.html\" title=\"struct twitch_api::helix::tags::TwitchTag\">TwitchTag</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","twitch_api::helix::endpoints::streams::get_stream_tags::Tag","twitch_api::helix::endpoints::tags::get_all_stream_tags::Tag"],["<section id=\"impl-Eq-for-TwitchTag\" class=\"impl\"><a class=\"src rightside\" href=\"src/twitch_api/helix/endpoints/tags/mod.rs.html#79\">source</a><a href=\"#impl-Eq-for-TwitchTag\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"twitch_api/helix/tags/struct.TwitchTag.html\" title=\"struct twitch_api::helix::tags::TwitchTag\">TwitchTag</a></h3></section>","Eq","twitch_api::helix::endpoints::streams::get_stream_tags::Tag","twitch_api::helix::endpoints::tags::get_all_stream_tags::Tag"],["<section id=\"impl-StructuralPartialEq-for-TwitchTag\" class=\"impl\"><a class=\"src rightside\" href=\"src/twitch_api/helix/endpoints/tags/mod.rs.html#79\">source</a><a href=\"#impl-StructuralPartialEq-for-TwitchTag\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"twitch_api/helix/tags/struct.TwitchTag.html\" title=\"struct twitch_api::helix::tags::TwitchTag\">TwitchTag</a></h3></section>","StructuralPartialEq","twitch_api::helix::endpoints::streams::get_stream_tags::Tag","twitch_api::helix::endpoints::tags::get_all_stream_tags::Tag"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()