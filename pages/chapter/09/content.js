import { useRouter } from "next/router";
import MainLayout from "components/layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useMorph } from "utils/useMorph";
import Image from "next/image";

export default function ChapterPage() {
  // const router = useRouter();
  const m = useMorph();
  const currentChapter = useSelector((state) => state.navigation.value.chapter);
  const currentSection = useSelector((state) => state.navigation.value.section);
  // const { id, section } = router.query;

  // Rendu conditionnel selon la rubrique
  const renderContent = () => {
    switch (currentSection) {
      case "text":
        return (
          <>
            <div style={{borderRadius: "20px"}}>
              <Image
                src="/images/09-main.png"
                alt="A shepard and his dog"
                width={624}
                height={416}
              />
            </div>
            <p>
              {m("H-ic", "mas-nom")} {m("vir-", "mas-nom")},{" "}
              {m("qu-ī", "mas-nom")} in {m("camp-ō", "mas-abl")} ambulat,{" "}
              {m("pāstor-", "mas-nom")} {m("Jūli-ī", "mas-gen")} est.{" "}
              {m("Pāstor-", "mas-nom")} nōn {m("sol-us", "mas-nom")} est in{" "}
              {m("camp-ō", "mas-abl")}, nam {m("can-is", "mas-nom")}{" "}
              {m("nig-er", "mas-nom")} cum {m("e-ō", "mas-abl")} est et centum{" "}
              {m("ovēs", "mas-nom")}: {m("ūn-a", "fem-nom")}{" "}
              {m("ov-is", "fem-nom")} {m("nigr-a", "fem-nom")} et ūndēcentum{" "}
              {m("ov-ēs", "fem-nom")} {m("alb-æ", "fem-nom")}.{" "}
              {m("Pāstor-", "mas-nom")} {m("ūn-am", "fem-acc")}{" "}
              {m("ov-em", "fem-acc")} {m("nigr-am", "fem-acc")} et{" "}
              {m("mult-ās", "fem-acc")} {m("ov-ēs", "fem-acc")}{" "}
              {m("alb-ās", "fem-acc")} habet. {m("-Is", "mas-nom")} est{" "}
              {m("domin-us", "mas-nom")} {m("ov-is", "fem-gen")}{" "}
              {m("nigr-æ", "fem-gen")} et {m("ov-ium", "fem-gen")}{" "}
              {m("alb-ārum", "fem-gen")}. {m("Pāstor-", "mas-nom")}{" "}
              {m("ov-ī", "fem-dat")} {m("nigr-æ", "fem-dat")} et{" "}
              {m("ov-ibus", "fem-dat")} {m("alb-īs", "fem-dat")}{" "}
              {m("aqu-am", "fem-acc")} et {m("cib-um", "mas-acc")} dat. Cum{" "}
              {m("ūn-ā", "fem-abl")} {m("ov-e", "fem-abl")}{" "}
              {m("nigr-ā", "fem-abl")} et ūndēcentum {m("ov-ibus", "fem-abl")}{" "}
              {m("alb-īs", "fem-abl")} {m("pāstor-", "mas-nom")} in{" "}
              {m("camp-ō", "mas-abl")} est.
            </p>
            <p>
              Cibus ovium est herba, quæ in campō est. In rīvō est aqua. Ovēs in
              campō herbam edunt, et aquam bibunt ē rivō, quī inter campum et
              silvam est. Canis herbam nōn ēst, neque pāstor• herbam ēst. Cibus
              pāstōris est pānis, quī inest in saccō. Jūlius pāstorī suō pānem
              dat. Pāstor• canī suō cibum dat: canis ā pāstōre cibum accipit.
              Itaque canis pāstōrem amat. In Italiā sunt multī pāstōrēs. Quī viā
              Appiā Rōmā Brundisium it multōs pāstōrēs videt in campīs. Numerus
              pāstōrum magnus est. Dominī pāstōribus suīs cibum dant. Canēs ā
              pāstōribus cibum accipiunt. Post campum montēs sunt. Inter montēs
              sunt vallēs. In campō est collis. (Collis est mons parvus.) In
              colle arbor• est. In silvā multæ arborēs sunt. Ovēs nōn in silvā
              neque in monte, sed in campō sunt. In silvā est lupus. Pāstor• et
              ovēs lupum timent, nam lupus ovēs ēst. In silvīs et in montibus
              lupī sunt, in vallibus nūllī sunt lupī. Sōl• in cælō est suprā
              campum. In cælō nūlla nūbēs vidētur. Cælum est suprā terram.
              Montēs et vallēs, campī silvæque sunt in terrā. In cælō sōl• et
              nūbēs sunt, sed suprā hunc campum cælum sine nūbibus est. Itaque
              sōl• lūcet in campō. Pāstor• in sole ambulat. Sub arbore autem
              umbra est. Pāstor•, quī nūllam nūbem videt in cælō, cum cane et
              ovibus ad arborem adit. Pāstor• umbram petit. Etiam ovēs umbram
              petunt: post pāstōrem ad arborem adeunt. Pāstor• ovēs suās ad
              arborem dūcit. Ecce pāstor• in umbrā arboris jacet cum cane et
              ovibus. Arbor• pāstorī et canī et ovibus umbram dat; sed ovis
              nigra cum paucīs aliīs in sole jacet. Pāstor•, quī fessus est,
              oculōs claudit et dormit. Canis nōn dormit. Dum pāstor• in herbā
              dormit, ovis nigra ab ovibus albīs abit et ad rivum currit. Ovis
              nigra ovēs albās relinquit et rivum petit; aquam bibit ē rivō, et
              in silvam intrat! Canis lātrat: “Baubau!” Pāstor• oculōs aperit,
              ovēs aspicit, ovem nigram nōn videt. Pāstor• ovēs numerat: “Ūna,
              duæ, trēs, quattuor, quīnque... ūndēcentum.” Numerus ovium est
              ūndēcentum, nōn centum. Nūllæ ovēs albæ absunt, sed abest ovis
              nigra. Pāstor• et canis ovēs albās relinquunt et silvam petunt.
              Pāstor• saccum cum pāne in colle relinquit. Dum cēteræ ovēs ā
              pāstōre numerantur, ovis nigra in magnā silvā, ubi via nūlla est,
              errat. Ovis, quæ jam procul ā pāstōre cēterīsque ovibus abest,
              neque cælum neque sōlem suprā sē videt. Sub arboribus sōl• nōn
              lūcet. Ovis nigra in umbrā est. In terrā inter arborēs sunt
              vestīgia lupī. Ubi est lupus ipse? Nōn procul abest. Ovis vestīgia
              lupī in terrā videt, neque lupum ipsum videt. Itaque ovis lupum
              nōn timet. Parva ovis sine timōre inter arborēs errat. Lupus autem
              prope ovem est. Pāstor• et canis procul ab eā sunt. Lupus, quī
              cibum nōn habet, per silvam errat. Lupus in silvā cibum quærit,
              dum pāstor• et canis ovem nigram quærunt. Pāstor•: “Ubi est ovis
              nigra? Age! quære ovem, canis, et reperī eam!” Canis ovem quærit
              et vestīgia ejus in terrā reperit, neque ovem ipsam reperit. Canis
              lātrat. Pāstor•: “Ecce vestīgia ovis. Ubi est ovis ipsa? Dūc mē ad
              eam, canis!” Canis dominum suum per silvam dūcit ad ovem, sed ovis
              procul abest. Lupus ululat: “Uhū!” Et ovis et canis lupum
              audiunt.  Canis currit. Ovis cōnsistit et exspectat dum lupus
              venit. Ovis bālat: “Bābā!” Ecce lupus quī ante ovem est! Jam ovis
              lupum ipsum ante sē videt. Oculī lupī in umbrā lūcent ut gemmæ et
              dentēs ut margarītæ. Parva ovis oculōs claudit et dentēs lupī
              exspectat. Lupus collum ovis petit dentibus... Sed ecce canis
              accurrit! Lupus sē ab ove vertit ad canem, quī ante lupum
              cōnsistit et dentēs ostendit. Lupus ululat. Canis lātrat. Ovis
              bālat. Pāstor•, quī jam prope est, clāmat: “Pete lupum!” Canis
              clāmōrem pāstōris audit, et sine timōre lupum petit. Lupus autem
              ovem relinquit et montēs petit. Pāstor• quoque accurrit et ovem
              suam, quæ in terrā jacet, aspicit. In collō ejus sunt vestīgia
              dentium lupī! Ovis oculōs aperit et ad pāstōrem suum bālat.
              Pāstor• lætus ovem in umerōs impōnit eamque portat ad cēterās
              ovēs, quæ sine pāstōre in campō errant. Procul in monte lupus
              ululat.
            </p>
          </>
        );
      case "grammar":
        return <p>Voici la grammaire du chapitre {currentChapter}.</p>;
      case "exercises":
        return <p>Voici les exercices du chapitre {currentChapter}.</p>;
      case "vocabulary":
        return <p>Voici le vocabulaire du chapitre {currentChapter}.</p>;
      default:
        return <p>Sélectionne une rubrique.</p>;
    }
  };

  return <MainLayout>{renderContent()}</MainLayout>;
}
